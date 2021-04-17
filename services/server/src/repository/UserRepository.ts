import db from '../db';
import { AND } from './lib/And';
import User from '../entity/User';
import { BaseError } from '../error';
import { UserRepositoryFindError, UserRepositorySaveError } from '../error/repository/UserRepositoryError';

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

class UserRepository implements IUserRepository {
  async Save(user: UserRepoSave) {
    let conn;

    try {
      conn = await db.conn();
      await conn.query('INSERT INTO users (email, password, name) VALUES (?, ?, ?)', [
        user.email,
        user.password,
        user.name,
      ]);

      return true;
    } catch (e) {
      return new UserRepositorySaveError(e);
    } finally {
      conn?.release();
    }
  }
  async Find(user: UserRepoFind) {
    let conn;

    try {
      conn = await db.conn();
      const result = await conn.query(`SELECT * FROM users WHERE ${AND(user)};`);
      const userResult = new User({
        id: result.id,
        name: result.name,
        email: result.email,
        signupDate: result.cdate,
      });

      return userResult;
    } catch (e) {
      return new UserRepositoryFindError(e);
    } finally {
      conn?.release();
    }
  }
}

export default UserRepository;
