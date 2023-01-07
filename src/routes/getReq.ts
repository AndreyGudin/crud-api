import { IncomingMessage } from 'node:http';
import { validate as uuidValidate } from 'uuid';

import { ApiResponse, User } from '../types/types';

const { pid } = process;
export default function getReq(
  req: IncomingMessage,
  res: ApiResponse,
  users: User[],
) {
  const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
  const id = req.url?.split('/')[3];
  if (req.url === '/api/users/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  } else if ((id) && (!uuidValidate(id))) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' }));
  } else if ((id) && (uuidValidate(id)) && (baseUrl === '/api/users/')) {
    res.setHeader('Content-Type', 'application/json');
    const user = users.filter((u) => u.id === id);
    if (user.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(user));
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
