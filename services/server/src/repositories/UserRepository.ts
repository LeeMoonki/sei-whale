import db from '../db';

export interface UserSave {
  name: string;
  email: string;
  password: string;
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
}

export default UserRepository;
