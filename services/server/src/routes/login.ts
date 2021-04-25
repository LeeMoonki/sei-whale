import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';

interface IBody {
  email: string;
  password: string;
}

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: IBody }>('/', async function (request, reply) {
    const { email, password } = request.body;

    const user = await this.services.user.Login(email, password);

    if (user) {
      reply
        .setAuthCookie({ userId: user.id })
        .then(() => {
          reply.send({ success: true });
        })
        .catch(() => {
          reply.send({ success: true });
        });
    } else {
      reply.send({ success: false });
    }
  });
}

const options = {
  prefix: 'login',
};

export default { routes, options: apiOptions(options) };
