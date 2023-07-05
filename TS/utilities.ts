type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export const nonNullObject = <T extends object>(objectToTest: T): objectToTest is T => {
  return Object.values(objectToTest).every(x => x !== null);
}

export const exhaustedCheck(param: never): never => {
  throw new Error('Unprocessed param: ', param);
}
