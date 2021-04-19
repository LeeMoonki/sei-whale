/* eslint-disable @typescript-eslint/no-unused-vars */
import fastify, { FastifyLoggerInstance } from 'fastify';
import { IUserApplicationService } from '../src/services/app/UserApplicationService';

declare module 'fastify' {
  export interface FastifyInstance {
    services: {
      user: IUserApplicationService;
    };
  }
}
