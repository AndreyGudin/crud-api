import { IncomingMessage } from 'node:http';
import { validate as uuidValidate } from 'uuid';

import { ApiResponse, User } from '../types/types';

export default async function deleteReq(
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
    if (user >= 0) {
      users.splice(user, 1);
      res.statusCode = 204;
      res.write(JSON.stringify({ title: 'Deleted', message: 'User has been deleted' }));
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
