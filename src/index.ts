/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer } from 'node:http';
import * as dotenv from 'dotenv';

dotenv.config({ path: './src/.env' });

const { PORT } = process.env;
const server = createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server started om port : ${PORT}`);
});
