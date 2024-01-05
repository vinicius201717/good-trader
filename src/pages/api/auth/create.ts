import { NextApiRequest, NextApiResponse } from 'next/types'
import { prisma } from 'src/lib/prisma'
import bcrypt from 'bcrypt'

export default async function handleRegistration(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, email, phone, password } = req.body

  try {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      })

      if (user !== null) {
        return res.status(405).end()
      }
    } catch (error) {
      console.error('Error creating user:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }

    const hash = await bcrypt.hash(password, 8)

    const user = await prisma.user.create({
      data: {
        email,
        name,
        phone,
        password: hash
      }
    })

    res.status(201).json({ user })
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
