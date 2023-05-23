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
// Mapped Types

interface Man {
  name: string;
  age: number;
  single: boolean;
}

type NewKey = 'prefix__';
type Mapped<T> = { [K in keyof T as NewKey]: T[K] };
type MappedMan = Mapped<Man>; // prefix__: string | number | boolean

// -----------------------------------------------------------------
// Enum, Interface, Object fields
enum Cols1 {
  GREEN = 'green',
  RED = 'red'
}

type EnumKeys = keyof typeof Cols1;
type EnumVals= `${Cols1}`;

interface Person {
  name: string;
  age: number;
  location: string;
}
type K1 = keyof Person; // name | age | location


const names = { foo: "hello", bar: "world", baz: "bye" } as const; // "as const" meaningful for ObjValues type
type ObjKeys = keyof typeof names;
type ObjValues = (typeof names)[keyof typeof names];


const obj = { foo: "hello", bar: "world", baz: "bye" };
function foo1<T extends object, U extends keyof T>(obj: T): U[] {
  return Object.keys(obj).map(val => val) as U[];
}


// -----------------------------------------------------------------
function foo2<T extends number | boolean | string>(param: T): T extends string ? number : boolean;

function foo2(param: unknown): number | boolean {
  if (typeof param === 'string') {
    return param.length;
  }
  return true;
}

// -----------------------------------------------------------------
enum cols {
  GREEN = 'green',
  RED = 'red'
}

type Fields = `${cols}`;


const colors = {
  GREEN: 'green',
  RED: 'red'
} as const;

type asta = {
  col: typeof colors[keyof typeof colors][]
}

const o: asta = { col: ['red'] };

let a:Fields = 'red';

//-------------------------------------

type t1 = 'a' | 'b' | 'c';

type t2 = {
  [key in t1]: string
}

// let b: t2 = {a: 'sdf'};
