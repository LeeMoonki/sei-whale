import { BaseError, ErrorCode, ErrorMessage, ErrorObject } from '../base';
import { MARIADB_ERROR_RANGE } from '../codeRanges';

abstract class MariadbError extends BaseError {
  constructor(code: ErrorCode, message: ErrorMessage, errorObject?: ErrorObject) {
    super(code, message, errorObject);
  }
}

export class MariadbNoPoolError extends MariadbError {
  constructor(errorObject?: ErrorObject) {
    super(MARIADB_ERROR_RANGE[0] + 1, 'DB Pool이 없습니다.', errorObject);
  }
}
