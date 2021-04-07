import fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyFormbody from 'fastify-formbody';
import fastifyCors from 'fastify-cors';

import { FastifyInstance } from './types';

import loginApi from './routes/login';
import echoApi from './routes/echo';

const app: FastifyInstance = fastify({ logger: {
  prettyPrint: true
} });

/** api call whiteList */
const whiteList: RegExp[] = [
  /http.+localhost:[\d]+/,
  /http.+127\.0\.0\.1:[\d]+/,
];

app.register(fastifyFormbody);
app.register(fastifyMultipart);
app.register(fastifyCors, {
  origin: (origin, passCallback) => {
    for (const whiteListItem of whiteList) {
      console.log('testing origin : ', origin, whiteListItem.test(origin));
      if (!origin || whiteListItem.test(origin)) {
        passCallback(null, true);
        return;
      }
    }

    passCallback(new Error('Not Allowed to Access'), false);
  }
});

// routes
app.register(loginApi.routes, loginApi.options);
app.register(echoApi.routes, echoApi.options);

function prepare() {
  return app;
}

export default prepare;
