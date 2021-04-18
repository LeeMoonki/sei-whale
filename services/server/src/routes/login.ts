import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';

interface IBody {
  email: string;
  password: string;
}

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: IBody }>('/', async function (request, reply) {
    const { email, password } = request.body;

    const successToLogin = await this.services.user.Login(email, password);

    return { success: successToLogin };
  });
}

const options = {
  prefix: 'login',
};

export default { routes, options: apiOptions(options) };
