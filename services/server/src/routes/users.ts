// signup: POST /users
import { FastifyInstance } from 'fastify';
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
  /** 회원가입 */
  fastify.post<{ Body: IBody }>('/signup', async function (request, reply) {
    const { email, password, name } = request.body;
    const result = await this.services.user.Signup({ email, password, name });

    return { success: result };
  });

  /** email로 회원 조회(임시) */
  fastify.get<{ Querystring: IQueryString }>('/', async function (request, reply) {
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
