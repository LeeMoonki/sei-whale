import fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyFormbody from 'fastify-formbody';

import { FastifyInstance } from './types';

import loginApi from './routes/login';

const app: FastifyInstance = fastify({ logger: {
  prettyPrint: true
} });

app.register(fastifyFormbody);
app.register(fastifyMultipart);

app.register(loginApi.routes, loginApi.options);

function prepare() {
  return app;
}

export default prepare;
