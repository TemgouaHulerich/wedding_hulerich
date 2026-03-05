import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/utils/paypal';
import paypal from '@paypal/checkout-server-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { amount } = req.body;

  if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
    return res.status(400).json({ message: 'Montant invalide.' });
  }

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: parseFloat(amount).toFixed(2),
        },
        description: 'Contribution pour la lune de miel de Marie & Jean',
      },
    ],
  });

  try {
    const order = await client().execute(request);
    res.status(200).json({ id: order.result.id });
  } catch (err: any) {
    console.error('PayPal API Error:', err.message);
    res.status(500).json({ message: 'Erreur lors de la création de la commande PayPal.' });
  }
}
