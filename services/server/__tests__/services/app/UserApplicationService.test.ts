import { IUserApplicationService } from '../../../src/services/app/interfaces';
import UserApplicationService from '../../../src/services/app/UserApplicationService';

import { IUserRepository } from '../../../src/repository/interfaces';
import {
  UserRepositoryFindError,
  UserRepositorySaveError,
} from '../../../src/error/repository/UserRepositoryError';

import * as libPassword from '../../../src/lib/password';

class MockUserRepo implements IUserRepository {
  Save = jest.fn(({ email }) => {
    if (email === 'error') return Promise.resolve(new UserRepositorySaveError());
    else return Promise.resolve({}) as any;
  });
  Find = jest.fn(({ email }) => {
    if (email === 'error') return Promise.resolve(new UserRepositoryFindError());
    if (email) return Promise.resolve({ password: true }) as any;
    else return Promise.resolve({}) as any;
  });
}

describe('UserApplicationService', () => {
  let Service: IUserApplicationService;

  beforeAll(() => {
    Service = new UserApplicationService(MockUserRepo);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Login', () => {
    it('이메일이 존재하지 않으면 null을 반환합니다.', async () => {
      const loginResult = await Service.Login('', '');

      expect(loginResult).toBeNull();
    });

    it('UserRepo의 Find 메서드가 에러를 반환하면 null을 반환합니다.', async () => {
      const loginResult = await Service.Login('error', '');

      expect(loginResult).toBeNull();
    });

    it('password가 틀리면 null을 반환합니다.', async () => {
      jest
        .spyOn(libPassword, 'matchPassword')
        .mockImplementation(() => Promise.resolve(false) as any);

      const loginResult = await Service.Login('foo', '');

      expect(loginResult).toBeNull();
    });

    it('password가 맞으면 null이 아닌 값을 값을 반환합니다.', async () => {
      jest
        .spyOn(libPassword, 'matchPassword')
        .mockImplementation(() => Promise.resolve(true) as any);

      const loginResult = await Service.Login('foo', '');

      expect(loginResult).not.toBeNull();
    });
  });

  describe('Signup', () => {
    it('UserRepo의 Save 메서드가 에러를 반환하면 false를 반환합니다.', async () => {
      jest.spyOn(libPassword, 'encryptPassword');

      const signupResult = await Service.Signup({ email: 'error', name: '', password: '' });

      expect(signupResult).toBe(false);
    });

    it('정상적으로 DB에 기록이 되면 false가 아닌 값을 반환합니다.', async () => {
      jest.spyOn(libPassword, 'encryptPassword');

      const signupResult = await Service.Signup({ email: 'foo', name: '', password: '' });

      expect(signupResult).not.toBe(false);
    });
  });
});
