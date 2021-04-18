/* eslint-disable @typescript-eslint/no-unused-vars */
import fastify, { FastifyLoggerInstance } from 'fastify';
import { IUserApplicationService } from '../src/services/app/UserApplicationService';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse,
    Logger = FastifyLoggerInstance
  > {
    services: {
      user: IUserApplicationService;
    };
  }
}
