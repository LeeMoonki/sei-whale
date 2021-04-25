import { FastifyRequest, FastifyInstance, FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { promisify } from 'util';
import { parse } from '../lib/cookie';

interface FastifySessionHandlerMiddlewareInstance extends FastifyInstance {
  extendRequest: (request: FastifyRequest, key: string, value: any) => void;
}

function isFastifySessionHandlerMiddlewareInstance(
  instance: FastifyInstance
): instance is FastifySessionHandlerMiddlewareInstance {
  return !!(instance as any).extendRequest;
}

export interface SessionUser {
  id: number;
}
export interface SessionExtendRequest {
  user: SessionUser | null;
}

const sessionPlugin: FastifyPluginAsync = async function (fastify) {
  fastify.decorate('extendRequest', (request: FastifyRequest, key: string, value: any) => {
    (request as any)[key] = value;
  });

  fastify.addHook('preHandler', async function (request) {
    if (isFastifySessionHandlerMiddlewareInstance(fastify)) {
      const sid = parse(request.headers.cookie || '')[process.env.SESSION_KEY as string];
      const userId = await promisify(fastify.redis.get).bind(fastify.redis)(sid);
      let sessionUser: SessionUser | null = null;

      if (userId) {
        sessionUser = {
          id: parseInt(userId),
        };
      }

      fastify.extendRequest(request, 'user', sessionUser);
    }
  });
};

// fp를 사용하지 않으면 encapsulate 되지만 root fastify instance 들에는 적용되지 않는다.
// 하지만 위에 작성한 preHandler hook은 모든 fastify instance에 적용돼야 하므로 fp를 사용한다.
export default fp(sessionPlugin);
