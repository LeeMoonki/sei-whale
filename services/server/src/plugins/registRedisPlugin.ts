import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import redis from 'redis';

const registRedisPlugin: FastifyPluginAsync = async (fastify) => {
  try {
    const client = redis.createClient({
      host: 'serviceredis',
      port: 6379,
    });

    fastify.decorate('redis', client);

    console.info('🗄️    redis has been connected!');
  } catch (e) {
    console.error('🗄️    Connecting to the redis failed!');
  }
};

export default fp(registRedisPlugin);
