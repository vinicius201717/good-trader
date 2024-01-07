import { NextApiRequest, NextApiResponse } from 'next/types'
import { prisma } from 'src/lib/prisma'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

export default async function handleMe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const token = req.headers.authorization

  try {
    if (!token) {
      return new Error('Token não fornecido')
    }

    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET as Secret) as JwtPayload

    const response = await prisma.user.findUnique({
      where: {
        id: decoded.id
      }
    })

    if (!response) {
      throw new Error('User not found')
    }

    const { password: _unused, ...user } = response

    const data = { ...user, role: 'client' }

    res.send({ userData: data })
  } catch (error) {
    console.error('Error processing request:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
