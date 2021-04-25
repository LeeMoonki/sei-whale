/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fastify, { FastifyLoggerInstance, FastifyRequest } from 'fastify';
import { RedisClient } from 'redis';
import { IUserApplicationService } from '../src/services/app/UserApplicationService';

import { SessionExtendRequest } from '../src/plugins/sessionPlugin';
import { DecorateReplyPlugin } from '../src/plugins/decorateReplyPlugin';

declare module 'fastify' {
  export interface FastifyInstance {
    redis: RedisClient;

    services: {
      user: IUserApplicationService;
    };
  }

  export interface FastifyRequest extends SessionExtendRequest {}

  export interface FastifyReply extends DecorateReplyPlugin {}
}
