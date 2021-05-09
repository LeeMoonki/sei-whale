import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import UserRepository, { IUserRepository } from '../repository/UserRepository';
import { IUserApplicationService } from '../services/app/interfaces';

// 여기에서 Application Services를 설정해주면 server/@types/index.d.ts 에서도 설정해줘야 한다.

interface RegistServicesOptions {
  UserApplicationService: new (
    userRepository: new () => IUserRepository
  ) => IUserApplicationService;
}

const registApplicationServicesPlugin: FastifyPluginAsync<RegistServicesOptions> = async (
  fastify,
  options
) => {
  fastify.decorate('services', {
    user: new options.UserApplicationService(UserRepository),
  });
};

export default fp(registApplicationServicesPlugin);
