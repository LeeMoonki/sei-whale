import { FastifyPluginAsync, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import { v4 as uuidv4 } from 'uuid';

export interface DecorateReplyPlugin {
  setAuthCookie: (options: SetAuthCookieOptions) => Promise<boolean>;
}

interface SetAuthCookieOptions {
  userId: number;
}

const daySeconds = 60 * 60 * 24; // 1분 * 60분 * 24시간
const sessionExpireDays = parseInt(process.env.SESSION_EXPIRE_DAYS || '7');
const sessionExpireSeconds = sessionExpireDays * daySeconds;

const decorateReplyPlugin: FastifyPluginAsync = async function (fastify) {
  fastify.decorateReply(
    'setAuthCookie',
    async function (this: FastifyReply, { userId }: SetAuthCookieOptions) {
      const now = new Date();
      const expires = new Date(now.setDate(now.getDate() + sessionExpireDays)); // 7일간 로그인 세션 유지
      const sessionKey = uuidv4();
      const result = await fastify.redis.setex(sessionKey, sessionExpireSeconds, `${userId}`);

      if (result) {
        this.header('Set-Cookie', [
          `${
            process.env.SESSION_KEY
          }=${sessionKey};Expires=${expires.toUTCString()};HttpOnly;path=/;`,
        ]);
      } else {
        console.error('session 설정 실패');
      }

      return result ? Promise.resolve() : Promise.reject();
    }
  );
};

export default fp(decorateReplyPlugin);
