import { isError } from '../../error';
import UserRepository, { IUserRepository, UserRepoSave } from '../../repository/UserRepository';
import { encryptPassword, matchPassword } from '../../lib/password';

type SignupParams = UserRepoSave;

export interface IUserApplicationService {
  Login: (email: string, password: string) => Promise<boolean>;
  Signup: (user: SignupParams) => Promise<boolean>;
}

class UserApplicationService implements IUserApplicationService {
  private readonly userRepo: IUserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  /** 로그인 서비스 */
  async Login(email: string, password: string) {
    const user = await this.userRepo.Find({ email });

    if (isError(user) || !user.password) {
      return Promise.resolve(false);
    }

    const match = await matchPassword(password, user.password);

    return match;
  }

  /** 회원가입 서비스 */
  async Signup(user: SignupParams) {
    const encryptedPassword = await encryptPassword(user.password);
    const userToSave = { ...user, password: encryptedPassword };
    const result = await this.userRepo.Save(userToSave);

    if (isError(result)) {
      return Promise.resolve(false);
    }

    return Promise.resolve(result);
  }
}

export default UserApplicationService;
