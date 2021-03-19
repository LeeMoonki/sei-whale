import fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyFormbody from 'fastify-formbody';
import fastifyCors from 'fastify-cors';

import { FastifyInstance } from './types';

import loginApi from './routes/login';

const app: FastifyInstance = fastify({ logger: {
  prettyPrint: true
} });

app.register(fastifyFormbody);
app.register(fastifyMultipart);
app.register(fastifyCors, {
  origin: (origin, passCallback) => {
    if (/http.+localhost:8080/.test(origin)) {
      passCallback(null, true);
      return;
    }

    passCallback(new Error('Not Allowed to Access'), false);
  }
});

// routes
app.register(loginApi.routes, loginApi.options);

function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });
  return app;
}

export default prepare;
