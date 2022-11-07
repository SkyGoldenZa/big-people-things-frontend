import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return await fn(req, res);
};

export default authenticated(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: 'John Doe' });
});
