export type Result<Error, Response> =
  | [Error, undefined]
  | [undefined, Response];

export type ValueOf<T> = T[keyof T];
