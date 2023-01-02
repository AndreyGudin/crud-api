/* eslint-disable linebreak-style */

import { IncomingMessage, ServerResponse } from 'node:http';

/* eslint-disable import/prefer-default-export */
type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

type ApiResponse = ServerResponse<IncomingMessage> & { req: IncomingMessage };

export { User, ApiResponse };
