import { NextApiRequest, NextApiResponse } from 'next';

import mockData from '../../../__mocks__/data.json';

const mockController = (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { key },
    method,
  } = req;
  const data = mockData[key];

  switch (method) {
    case 'GET':
      // get method mock
      res.status(200).json(data);
      break;
    case 'POST':
      // post method mock
      res.status(200).json(req.body);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default mockController;
