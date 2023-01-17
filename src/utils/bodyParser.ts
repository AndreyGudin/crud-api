import { IncomingMessage } from 'node:http';
import { User } from '../types/types';

export default function bodyParser(req: IncomingMessage):Promise<User> {
  return new Promise((resolve, reject) => {
    try {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        const temp: User = {
          username: 'Temp',
          age: 23,
          hobbies: ['temp', 'temp'],
        };
        if (body) resolve(JSON.parse(body));
        else resolve(temp);
      });
    } catch (error) { console.log(error); reject(error); }
  });
}
