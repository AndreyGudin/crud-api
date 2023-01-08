/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServer, request as requestToServer } from 'node:http';
import cluster from 'node:cluster';
import { cpus } from 'node:os';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { AddressInfo } from 'node:net';
import { RequestOptions } from 'node:https';

import deleteReq from './routes/deleteReq';
import { ServerMessage, User } from './types/types';
import getReq from './routes/getReq';
import postReq from './routes/postReq';
import putReq from './routes/putReq';
import bodyParser from './utils/bodyParser';
import createSingleServer from './server';

dotenv.config({ path: './src/.env' });
const id = uuidv4();
let users: User[] = [];
const { PORT } = process.env;
const { MODE_ENV } = process.env;
const { pid } = process;
if (MODE_ENV === 'single') {
  const server = createSingleServer(users);
  server.listen(PORT, () => {
    console.log(`Server started om port : ${PORT}`);
  });
} else {
  const numberOfCPUs: number = cpus().length;
  if (cluster.isPrimary) {
    let u: User[] = [];
    for (let i = 0; i < numberOfCPUs; i += 1) {
      const server = cluster.fork({ portChild: i });
      server.on('message', (message:ServerMessage) => {
        const arr = message.users;
        u = [...arr];
      });
    }
    const balancer = createServer((req, res) => {});
    let count = 1;
    balancer.on('request', async (request, response) => {
      try {
        const serverHostName = 'localhost';
      const portForRequest = +(PORT as string) + count;
      const options:RequestOptions = {
        hostname: serverHostName,
        port: portForRequest,
        path: request.url,
        method: request.method,
        headers: { 'Content-Type': 'application/json' },
      };
      const requestToServers = requestToServer(options, async (responseFromServer) => {
        response.statusCode = responseFromServer.statusCode as number;
        response.setHeader('Content-Type', responseFromServer.headers['content-type'] as string);
        const body = await bodyParser(responseFromServer);
        response.write(JSON.stringify(body));
        response.end();
      });
      if ((request.method === 'POST') || (request.method === 'PUT')) {
        const body = await bodyParser(request);
        requestToServers.write(JSON.stringify(body));
      }
      requestToServers.end();
      count += 1;
      if (count > numberOfCPUs) count = 1;
      const ids = Object.keys(cluster.workers as {});
      ids.forEach((idW) => cluster.workers![idW]?.send({ users: u }));
      } catch (error) {
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));
      }
    });
    balancer.listen(PORT, () => {
      console.log(`Balancer started om port : ${(balancer.address() as AddressInfo).port}, pid: ${pid}`);
    });
  } else {
    const { portChild } = process.env;
    const server = createServer((req, res) => {
      try {
        switch (req.method) {
          case 'GET':
            getReq(req, res, users);
            break;
          case 'POST':
            postReq(req, res, users);
            break;
          case 'PUT':
            putReq(req, res, users);
            break;
          case 'DELETE':
            deleteReq(req, res, users);
            break;
          default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.write(
              JSON.stringify({
                title: 'Not Found',
                message: 'Route does not exist',
              }),
            );
            res.end();
        }
        res.on('finish', () => {
          process?.send!({ users });
        });
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ title: 'Server Error', message: 'Error on server side' }));
      }
    });
    process?.on('message', (mess:ServerMessage) => {
      const arr = mess.users;
      users = [...arr];
    });
    const serverPort = +(PORT as string) + +(portChild as string) + 1;
    server.listen(serverPort, () => {
      console.log(`Server started om port : ${(server.address() as AddressInfo).port}, pid: ${pid}`);
    });

  }
}
