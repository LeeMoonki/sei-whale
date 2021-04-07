import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async (request, reply) => {
    request.log.info('echo-whale info : ', request.query);

    return {
      hello: 'sei-whale',
      echo: 1,
      q: request.query,
    };
  });
}

const options = {
  prefix: 'echo-whale',
};

export default { routes, options: apiOptions(options) };
