import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

const sessionPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.decorate('extendRequest', (request: FastifyRequest, key: string, value: any) => {
    (request as any)[key] = value;
  });

  fastify.addHook('preHandler', async function (request) {
    console.log('************** preHandler : ', request.headers.cookie);
    // fastify.extendRequest(request, 'userId', 1);
  });
};

export default fp(sessionPlugin);
