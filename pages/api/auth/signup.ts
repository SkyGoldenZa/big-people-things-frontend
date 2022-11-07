import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import {
  createUser,
  deleteUser,
  updateUser,
} from 'prisma/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;

  try {
    switch (method) {
      case 'POST': {
        const { email, password } = body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await createUser(email, hashedPassword);
        return res.json(user);
      }
      case 'PUT': {
        const { id, ...updateData } = body;
        const user = await updateUser(id, updateData);
        return res.json(user);
      }
      case 'DELETE': {
        const { id } = body;
        const user = await deleteUser(id);
        return res.json(user);
      }
      default:
        break;
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('if (error instanceof TypeError) {');
      return res.status(500).json({ name: 'error instanceof TypeError' });
    } else if (error instanceof RangeError) {
      console.log('} else if (error instanceof RangeError) {');
      return res.status(500).json({ name: 'error instanceof RangeError' });
    } else if (error instanceof EvalError) {
      console.log('} else if (error instanceof EvalError) {');
      return res.status(500).json({ name: 'error instanceof EvalError' });
    } else if (typeof error === 'string') {
      console.log("} else if (typeof error === 'string') {");
      return res.status(500).json({ name: 'typeof error === "string"' });
    } else {
      console.log('else');
      const test = res.status(500).json({ name: 'Oops something went wrong' });
      return test;
    }
  }
}
