import { IncomingMessage } from 'node:http';
import { User } from '../types/types';

export default function bodyParser(req: IncomingMessage):Promise<User> {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => resolve(JSON.parse(body)));
    } catch (error) { reject(error); }
  });
}
