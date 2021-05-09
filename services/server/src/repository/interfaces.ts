import User from '../entity/User';
import { BaseError } from '../error';

export interface UserRepoSave {
  name: string;
  email: string;
  password: string;
}

export interface UserRepoFind {
  id?: number;
  name?: string;
  email?: string;
}

export interface IUserRepository {
  Save: (user: UserRepoSave) => Promise<true | BaseError>;
  Find: (user: UserRepoFind) => Promise<User | BaseError>;
}
