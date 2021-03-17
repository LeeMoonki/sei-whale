import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';
import bcrypt from 'bcrypt';

interface IBody {
  id: string;
  password: string;
}

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: IBody }>('/', async (request, reply) => {
    const { id, password } = request.body;
    request.log.info(`login info : ${request.body.id} ${request.body.password}`);

    const encryted = await bcrypt.hash(password, 10);
    const match = await bcrypt.compare(password, encryted);

    return {
      id,
      password,
      encryted,
      length: encryted.length, // always 60 characters
      match,
    };
  });
}

const options = {
  prefix: 'login',
};

export default { routes, options: apiOptions(options) };
