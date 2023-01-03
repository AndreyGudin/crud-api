import { IncomingMessage } from 'node:http';
import { validate as uuidValidate } from 'uuid';

import { ApiResponse, User } from '../types/types';
import bodyParser from '../utils/bodyParser';

export default async function getReq(
  req: IncomingMessage,
  res: ApiResponse,
  users: User[],
) {
  const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
  const id = req.url?.split('/')[3];
  if ((id) && (!uuidValidate(id)) && (baseUrl === '/api/users/')) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));
  } else if ((id) && (uuidValidate(id)) && (baseUrl === '/api/users/')) {
    res.setHeader('Content-Type', 'application/json');
    const user = users.findIndex((u) => u.id === id);
    const body = await bodyParser(req);
    if (user >= 0) {
      res.statusCode = 200;
      users[user] = { ...body, id };
      res.write(JSON.stringify(users[user]));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ title: 'Not Found', message: 'User does not exist' }));
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));
  }
}
