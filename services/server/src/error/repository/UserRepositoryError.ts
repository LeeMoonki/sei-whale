import { BaseError, ErrorCode, ErrorMessage, ErrorObject } from '../base';
import { USER_REPOSITORY_ERROR_RANGE } from '../codeRanges';

abstract class UserRepositoryError extends BaseError {
  constructor(code: ErrorCode, message: ErrorMessage, errorObject?: ErrorObject) {
    super(code, message, errorObject);
  }
}

export class UserRepositorySaveError extends UserRepositoryError {
  constructor(errorObject?: ErrorObject) {
    super(USER_REPOSITORY_ERROR_RANGE[0] + 1, 'Save 메서드에서 오류가 발생했습니다.', errorObject);
  }
}

export class UserRepositoryFindError extends UserRepositoryError {
  constructor(errorObject?: ErrorObject) {
    super(USER_REPOSITORY_ERROR_RANGE[0] + 2, 'Find 메서드에서 오류가 발생했습니다.', errorObject);
  }
}
