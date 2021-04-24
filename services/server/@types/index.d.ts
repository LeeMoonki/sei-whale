/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fastify, { FastifyLoggerInstance, FastifyRequest } from 'fastify';
import { RedisClient } from 'redis';
import { IUserApplicationService } from '../src/services/app/UserApplicationService';

declare module 'fastify' {
  export interface FastifyInstance {
    redis: RedisClient;
    extendRequest: (request: FastifyRequest, key: string, value: any) => void;
    services: {
      user: IUserApplicationService;
    };
  }
}
