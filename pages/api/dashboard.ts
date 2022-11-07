import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated } from 'helpers/api/authenticated';

export default authenticated(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET': {
        return res.json({ message: 'Dashboard' });
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
});
