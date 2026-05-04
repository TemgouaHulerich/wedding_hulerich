import { client } from '@/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';

export const runtime = 'edge';
export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const amount = body?.amount;

    if (!amount || Number.isNaN(Number(amount)) || Number(amount) <= 0) {
      return Response.json({ message: 'Montant invalide.' }, { status: 400 });
    }

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: Number(amount).toFixed(2),
          },
          description: 'Contribution pour la lune de miel de Marie et Jean',
        },
      ],
    });

    const order = await client().execute(request);
    return Response.json({ id: order.result.id }, { status: 200 });
  } catch (err: any) {
    console.error('PayPal API Error:', err?.message || err);
    return Response.json({ message: 'Erreur lors de la creation de la commande PayPal.' }, { status: 500 });
  }
}
