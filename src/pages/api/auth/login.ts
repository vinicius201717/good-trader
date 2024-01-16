import { NextApiRequest, NextApiResponse } from 'next/types'
import { prisma } from 'src/lib/prisma'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'

export default async function handleLogin(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    const { email, password } = req.body

    const response = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (response === null) {
      return res.status(204).send('Invalid email or password')
    }

    const hash = await bcrypt.compare(password, response.password)

    if (!hash) {
      return res.status(204).send('Invalid email or password')
    }

    const payload = {
      id: response.id
    }

    const jwtExpiration = process.env.NEXT_PUBLIC_JWT_EXPIRATION
    const jwtSecret = process.env.NEXT_PUBLIC_JWT_SECRET as Secret

    const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration })

    const { password: _unused, ...user } = response

    const data = { ...user, role: 'client' }

    res.send({
      userData: data,
      accessToken: token
    })
  } catch (error) {}
}
