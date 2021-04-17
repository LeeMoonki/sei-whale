/* eslint-disable @typescript-eslint/no-unused-vars */
import fastify from 'fastify';
import { IUserApplicationService } from '../src/services/app/UserApplicationService';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse
  > {
    services: {
      user: IUserApplicationService;
    };
  }
}
