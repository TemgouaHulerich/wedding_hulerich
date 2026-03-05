import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { rsvpSchema } from '@/utils/validation';

type RSVPFormData = z.infer<typeof rsvpSchema>;

const RSVPForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  });
  const [formStatus, setFormStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const onSubmit: SubmitHandler<RSVPFormData> = async (data) => {
    setFormStatus(null);
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setFormStatus({ message: 'Merci ! Votre réponse a bien été enregistrée.', type: 'success' });
        reset();
      } else {
        throw new Error(result.message || 'Une erreur est survenue.');
      }
    } catch (error: any) {
      setFormStatus({ message: error.message, type: 'error' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-neutral-black/80 mb-2">Nom complet *</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-gray focus:border-accent-gray"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-neutral-black/80 mb-2">Email *</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-gray focus:border-accent-gray"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <p className="block text-neutral-black/80 mb-2">Serez-vous des nôtres ? *</p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input type="radio" value="Oui" {...register('presence')} className="mr-2" />
              Oui, avec plaisir !
            </label>
            <label className="flex items-center">
              <input type="radio" value="Non" {...register('presence')} className="mr-2" />
              Non, à notre grand regret.
            </label>
          </div>
          {errors.presence && <p className="text-red-500 text-sm mt-1">{errors.presence.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="guests" className="block text-neutral-black/80 mb-2">Nombre d'accompagnants (vous inclus)</label>
          <input
            id="guests"
            type="number"
            min="1"
            {...register('guests', { valueAsNumber: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-gray focus:border-accent-gray"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="diet" className="block text-neutral-black/80 mb-2">Restrictions alimentaires ?</label>
          <textarea
            id="diet"
            {...register('diet')}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-gray focus:border-accent-gray"
          ></textarea>
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-neutral-black/80 mb-2">Un petit mot pour les mariés ?</label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-gray focus:border-accent-gray"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-neutral-black text-white font-bold py-3 px-6 rounded-full hover:bg-accent-gray transition-colors disabled:bg-gray-400"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma réponse'}
        </button>

        {formStatus && (
          <div className={`mt-4 text-center p-3 rounded-md ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {formStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default RSVPForm;
