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
  Save() {
    console.log(db.hasPool());
  }
}

export default UserRepository;
