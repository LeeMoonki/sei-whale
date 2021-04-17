export type ErrorCode = number;
export type ErrorMessage = string;
export type ErrorObject = any;

/** 에러 기본 객체 */
export abstract class BaseError {
  private readonly _code: number;
  private readonly _message: string;
  private readonly _object: any;

  constructor(code: ErrorCode, message: ErrorMessage, errorObject?: ErrorObject) {
    this._code = code;
    this._message = message;
    this._object = errorObject;
  }

  get code() { return this._code; }
  get message() { return this._message; }
  get objct() { return this._object; }

  /** 전달받은 에러와 같은 에러인지 판단 */
  isErrorOf(error: BaseError) {
    return this._code === error.code;
  }
}

/** BaseError type guard */
export const isError = (error: unknown): error is BaseError => {
  return error instanceof BaseError;
}
