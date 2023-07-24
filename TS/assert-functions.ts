function isString(val: any): val is string {
  return typeof val === 'string';
}

function assertsString(val: any): asserts val is string {
  if(typeof val !== 'string') throw new Error('Not a string');
}


function foo1(str: any) {
  if(isString(str)) {
    return str.toLowercase(); // error
  }
  return Error();
}

function foo2(str: any) {
  assertsString(str);
  return str.toLowercase(); // will not show error if assertsString is commented out
}

/////////////////////////////////////////////////////////////////////////////////////////
// Example showed by Matt Pocock

function createPost(isSignedIn: string) {}

class User {
  constructor(public userId?: string) {}

  createPost() {
    this.assertUserIdExists();
    createPost(this.userId);
  }

  assertUserIdExists(): asserts this is this & {userId: string} {
    if(!this.userId) {
      throw new Error('The user is not signed in!')
    }
  }
}
