// General usage:
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// -----------------------------------------------------------------

// Conditional types
const foo1 = () => 'dfgfdg';
const foo2 = () => 'dfgfdg' as const;
const foo3 = (x: string | number) => x;

type User = {
    id: Symbol
}

type ExtractType<T> = T extends {id: infer U, name?: any} ? T["id"] : never
                                                                    type Extracted = ExtractType<User>;  //boolean

                                                                                                           type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : never;
type Res1 = ReturnType1<typeof foo1> // string
                                        type Res1_ = ReturnType1<typeof foo2> // 'dfgfdg'

type ReturnType2<T> = T extends ((...args: any) => infer R extends string) ? `${R}__return__type` : never;
type Res2 = ReturnType2<typeof foo1>  // `${string}__return__type`
                                          type Res2_ = ReturnType2<typeof foo2>  // 'dfgfdg__return__type'

// -----------------------------------------------------------------

type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
  ) => any
  ? FirstArgument
  : never

type t = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void> // string

// -----------------------------------------------------------------
type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
  ) => any
  ? SecondArgument
  : never

type t = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // number
// -----------------------------------------------------------------
type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T

type t = PromiseReturnType<Promise<string>> // string
// -----------------------------------------------------------------
type ArrayType<T> = T extends (infer Item)[] ? Item : T

type t = ArrayType<[string, number]> // string | number

