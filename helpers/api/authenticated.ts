import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { Secret, verify } from 'jsonwebtoken';

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.cookies.auth) {
    verify(
      req.cookies.auth,
      process.env.ACCESS_TOKEN_SECRET as Secret,
      async (err, decode) => {
        if (!err && decode) {
          return await fn(req, res);
        }
      }
    );
  }

  res.status(401).json({ message: 'Sorry you are not authenticated' });
};
