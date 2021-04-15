// signup: POST /users
import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';
import bcrypt from 'bcrypt';

import UserRepo from '../repositories/UserRepository';

interface IBody {
  email: string;
  password: string;
  name: string;
}

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: IBody }>('/', async (request, reply) => {
    const { email, password, name } = request.body;
    const encrytedPassword = await bcrypt.hash(password, 10);
    const userRepo = new UserRepo();

    userRepo.Save({ email, password: encrytedPassword, name });

    return {};
  });
}

const options = {
  prefix: 'users',
};

export default { routes, options: apiOptions(options) };
