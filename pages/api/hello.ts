// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { mock, Random } from 'mockjs';

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json(
        mock({
            'id|1-10': [
                {
                    name: Random.cname(),
                    birthdate: Random.date(),
                    address: Random.county(true),
                },
            ],
        }),
    );
}
