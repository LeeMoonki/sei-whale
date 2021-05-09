import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import UserRepository from '../repository/UserRepository';
import { IUserRepository } from '../repository/interfaces';
import { IUserApplicationService } from '../services/app/interfaces';

// 여기에서 Application Services를 설정해주면 server/@types/index.d.ts 에서도 설정해줘야 한다.

interface RegistServicesOptions {
  UserApplicationService: new (
    userRepository: new () => IUserRepository
  ) => IUserApplicationService;
}

const injectApplicationServicesPlugin: FastifyPluginAsync<RegistServicesOptions> = async (
  fastify,
  options
) => {
  fastify.decorate('services', {
    user: new options.UserApplicationService(UserRepository),
  });
};

export default fp(injectApplicationServicesPlugin);
