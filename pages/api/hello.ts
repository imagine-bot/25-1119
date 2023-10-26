// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type RequestBody = {
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { count }: RequestBody = req.body;
  console.log(`Count: ${count}`);
  res.status(200).json({ name: 'John Doe' })
}