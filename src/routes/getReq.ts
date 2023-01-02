import { IncomingMessage } from 'node:http';
import { ApiResponse, User } from '../types/types';

export default function getReq(
  req: IncomingMessage,
  res: ApiResponse,
  users: User[],
) {
  if (req.url === '/api/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }
}
