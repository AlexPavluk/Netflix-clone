import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';

export default async function handler(req:NextApiRequest, res: NextApiResponse ) {
    if(req.method !== 'GET') {
        return res.status(405).end()
    }

    try {
        await serverAuth(req, res)
        
        const  {moviedId}  = req.query;

        if (typeof moviedId !== 'string') {
            throw new Error('Invalid Id');
          }
      
          if (!moviedId) {
            throw new Error('Missing Id');
          }

        const movie = await prismadb.move.findUnique({
            where: {
                id: moviedId
            }
        });

        if (!movie) {
            throw new Error('Invalid ID')
        }

        res.status(200).json(movie)
    } catch (error) {
        console.log(error)
        res.status(400).end()
    }
}