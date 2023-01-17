import { createServer } from 'node:http';

import deleteReq from './routes/deleteReq';
import { User } from './types/types';
import getReq from './routes/getReq';
import postReq from './routes/postReq';
import putReq from './routes/putReq';

export default function createSingleServer(users:User[]){
  const server = createServer((req, res) => {
    try {
      res.statusCode = 200;
      switch (req.method) {
        case 'GET':
          getReq(req, res, users);
          break;
        case 'POST':
          postReq(req, res, users);
          break;
        case 'PUT':
          putReq(req, res, users);
          break;
        case 'DELETE':
          deleteReq(req, res, users);
          break;
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.write(
            JSON.stringify({
              title: 'Not Found',
              message: 'Route does not exist',
            }),
          );
          res.end();
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));
    }
  });

  return server;
}