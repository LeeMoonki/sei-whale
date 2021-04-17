import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import loginAPI from '../routes/login';
import echoAPI from '../routes/echo';
import userAPI from '../routes/users';

const registRoutesPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(loginAPI.routes, loginAPI.options);
  fastify.register(echoAPI.routes, echoAPI.options);
  fastify.register(userAPI.routes, userAPI.options);
};

export default fp(registRoutesPlugin);
