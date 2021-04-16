// signup: POST /users
import { FastifyInstance } from '../types';
import { apiOptions } from './lib/apiOptions';
import bcrypt from 'bcrypt';

import UserRepo from '../repository/UserRepository';

interface IBody {
  email: string;
  password: string;
  name: string;
}

interface IQueryString {
  email: string;
}

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: IBody }>('/', async (request, reply) => {
    const { email, password, name } = request.body;
    const encrytedPassword = await bcrypt.hash(password, 10);
    const userRepo = new UserRepo();

    userRepo.Save({ email, password: encrytedPassword, name });

    return {};
  });

  fastify.get<{ Querystring: IQueryString }>('/', async (request, reply) => {
    const { email } = request.query;

    const userRepo = new UserRepo();
    const user = userRepo.Find({ email });

    return user;
  });
}

const options = {
  prefix: 'users',
};

export default { routes, options: apiOptions(options) };
