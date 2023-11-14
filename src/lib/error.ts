export const TAG = 'DynamoDbError';

export type DynamoDbError = {
  readonly _tag: typeof TAG;
  readonly _Params: unknown;
  readonly message: string;
  readonly cause: unknown;
};

export const toDynamoDbError =
  <I>(params: I) =>
  (x: unknown): DynamoDbError => {
    return {
      _tag: TAG,
      _Params: params,
      message: typeof x === 'object' && x && 'message' in x ? (x as any).message : String(x),
      cause: x,
    };
  };
