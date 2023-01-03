/* eslint-disable linebreak-style */

import { IncomingMessage, ServerResponse } from 'node:http';

type User = {
  id?: string;
  username: string;
  age: number;
  hobbies: string[];
};

type ApiResponse = ServerResponse<IncomingMessage> & { req: IncomingMessage };

export { User, ApiResponse };
