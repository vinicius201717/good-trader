import { NextApiRequest, NextApiResponse } from 'next/types'

// import { prisma } from 'src/lib/prisma'
// import bcrypt from 'bcrypt'

export default async function handleRegistration(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  res.status(200).send({ teste: 'rsafsaf', valor: true })
}
