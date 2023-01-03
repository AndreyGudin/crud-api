/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer } from 'node:http';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

import { User } from './types/types';
import getReq from './routes/getReq';
import postReq from './routes/postReq';

dotenv.config({ path: './src/.env' });
const id = uuidv4();
const users: User[] = [{
  id,
  username: 'Vasya',
  age: 23,
  hobbies: ['fun', 'run'],
}];
console.log(id);
const { PORT } = process.env;
const server = createServer((req, res) => {
  res.statusCode = 200;
  switch (req.method) {
    case 'GET':
      getReq(req, res, users);
      break;
    case 'POST':
      postReq(req, res, users);
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify({ title: 'Not Found', message: 'Route does not exist' }));
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started om port : ${PORT}`);
});
