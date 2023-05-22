type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}
