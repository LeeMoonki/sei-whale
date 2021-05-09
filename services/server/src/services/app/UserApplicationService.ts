import { IUserApplicationService } from './interfaces';
import { isError } from '../../error';
import { UserRepoSave } from '../../repository/interfaces';
import { IUserRepository } from '../../repository/interfaces';
import { encryptPassword, matchPassword } from '../../lib/password';

type SignupParams = UserRepoSave;

class UserApplicationService implements IUserApplicationService {
  private readonly userRepo: IUserRepository;

  constructor(userRepository: new () => IUserRepository) {
    this.userRepo = new userRepository();
  }

  /** 로그인 서비스 */
  async Login(email: string, password: string) {
    const user = await this.userRepo.Find({ email });

    if (isError(user) || !user.password) {
      return Promise.resolve(null);
    }

    const match = await matchPassword(password, user.password);

    return match ? user : null;
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
