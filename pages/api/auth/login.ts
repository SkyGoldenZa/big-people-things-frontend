import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByEmail } from 'prisma/user';
import { GetPublicKeyOrSecret, Secret, sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import cookie from 'cookie';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case 'POST': {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if (!user?.password) return;

        const match = await compare(password, user.password);
        const secret = process.env.ACCESS_TOKEN_SECRET as Secret;

        if (match) {
          const claims = { sub: user.id, myPersonEmail: user.email };
          const jwt = sign(claims, secret, { expiresIn: '1h' });

          res.setHeader(
            'Set-Cookie',
            cookie.serialize('auth', jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV == 'development',
              sameSite: 'strict',
              maxAge: 3600,
              path: '/',
            })
          );

          res.json({ message: 'Welcome back to the app!' });
        } else {
          res.json({ message: 'Oops, something went wrong!' });
        }

        return res.json({ login: match });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
