import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { IUserApplicationService } from '../services/app/UserApplicationService';

// 여기에서 Application Services를 설정해주면 server/@types/index.d.ts 에서도 설정해줘야 한다.

interface RegistServicesOptions {
  UserApplicationService: IUserApplicationService;
}

const registApplicationServicesPlugin: FastifyPluginAsync<RegistServicesOptions> = async (
  fastify,
  options
) => {
  fastify.decorate('services', {
    user: options.UserApplicationService,
  });
};

export default fp(registApplicationServicesPlugin);
