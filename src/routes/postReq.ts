import { IncomingMessage } from 'node:http';
import { v4 as uuidv4 } from 'uuid';

import { ApiResponse, User } from '../types/types';
import bodyParser from '../utils/bodyParser';

const { pid } = process;
export default async function postReq(
  req: IncomingMessage,
  res: ApiResponse,
  users: User[],
) {
  if (req.url === '/api/users/') {
    try {
      const body = await bodyParser(req);
      const id = uuidv4();
      if (('username' in body) && ('age' in body) && ('hobbies' in body)) {
        users.push({ ...body, id });
        res.statusCode = 201;
        res.setHeader('Content-Type', pid);
        res.write(JSON.stringify({ ...body, id }));
        res.end();
      } else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ title: 'Validation is failed', message: 'Request body is not valid' }));
      }
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ title: 'Validation is failed', message: 'Request body is not valid' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));
  }
}
