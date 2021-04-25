import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';
import db from '../db';

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async function (request) {
    request.log.info('echo-whale info : ', request.query);

    const rows = await db.query('SELECT NOW();');

    return {
      user: request.user,
      hello: 'sei-whale',
      echo: 1,
      q: request.query,
      rows,
      activeConn: db.activeConnections(),
      totalConn: db.totalConnections(),
    };
  });
}

const options = {
  prefix: 'echo-whale',
};

export default { routes, options: apiOptions(options) };
