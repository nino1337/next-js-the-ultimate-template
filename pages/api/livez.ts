import { NextApiRequest, NextApiResponse } from 'next';

const getServiceIsLive = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send('OK');
};

export default getServiceIsLive;
