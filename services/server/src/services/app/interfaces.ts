import User from '../../entity/User';
import { UserRepoSave } from '../../repository/interfaces';

type SignupParams = UserRepoSave;

export interface IUserApplicationService {
  Login: (email: string, password: string) => Promise<User | null>;
  Signup: (user: SignupParams) => Promise<boolean>;
}
