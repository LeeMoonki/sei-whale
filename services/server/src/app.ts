import fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyFormbody from 'fastify-formbody';
import fastifyCors from 'fastify-cors';
import dotenv from 'dotenv';
import db from './db';

import { FastifyInstance } from './types';

import UserApplicationService from './services/app/UserApplicationService';

import registRoutesPlugin from './plugins/registRoutesPlugin';
import registApplicationServicesPlugin from './plugins/registServicesPlugin';

/** 환경변수 설정 */
dotenv.config();

/** fastify 설정 */
const app: FastifyInstance = fastify({
  logger: {
    prettyPrint: true,
  },
});

/** mariadb 연결 */
db.init();

/** 교차출처 화이트리스트 */
const whiteList: RegExp[] = [/http.+localhost:[\d]+/, /http.+127\.0\.0\.1:[\d]+/];

/** 앱설정 */
app.register(fastifyFormbody);
app.register(fastifyMultipart);
app.register(fastifyCors, {
  origin: (origin, passCallback) => {
    for (const whiteListItem of whiteList) {
      // 화이트 리스트에 있거나 개발 환경에서 출처가 없다면 응답
      if (whiteListItem.test(origin) || (!origin && process.env.MODE === 'development')) {
        passCallback(null, true);
        return;
      }
    }

    passCallback(new Error('Not Allowed to Access'), false);
  },
});

/** Application Service 설정 */
app.register(registApplicationServicesPlugin, {
  UserApplicationService: new UserApplicationService(),
});

/** 라우트 */
app.register(registRoutesPlugin);

/** 앱 준비 함수 */
function prepare() {
  return app;
}

app.addHook('onClose', () => {
  db.close();
});

export default prepare;
