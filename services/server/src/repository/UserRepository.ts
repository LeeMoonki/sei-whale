import db from '../db';
import { AND } from './lib/And';

export interface UserSave {
  name: string;
  email: string;
  password: string;
}

export interface UserFind {
  id?: number;
  name?: string;
  email?: string;
}

export interface IUserRepository {
  Save: (user: UserSave) => void;
}

class UserRepository implements IUserRepository {
  Save(user: UserSave) {
    db.conn()
      .then(async conn => {
        let result;
        try {
          result = await conn.query('INSERT INTO users (email, password, name) VALUES (?, ?, ?)', [user.email, user.password, user.name]);
        } catch (e) {
          console.error('UserRepository Save Error', e);
        } finally {
          conn.release();
        }
      });
  }
  Find(user: UserFind) {
    return db.connAsync({
      connCallback: async conn => {
        return await conn.query(`SELECT * FROM users WHERE ${AND(user)};`);
      },
      catch: e => {
        console.error('UserRepository Find Error', e);
      },
    });
  }
}

export default UserRepository;
