// 1
const SingletoneOne = (function() {

  let instance;

  function Singletone() {
    return (instance ? instance : instance = this);
  }

  return Singletone;

})();

// 2
const SingletonFactory = (function() {
  function SingletonClass() {
    // ...
  }

  let instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = new SingletonClass();
        delete instance.constructor;
      }
      return instance;
    }
  };
})();

// 3
class Singleton {
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
    }

    return Singleton._instance;
  }

  static getInstance() {
    return this._instance;
  }
}

console.log( new SingletoneOne() === new SingletoneOne() );
console.log( SingletonFactory.getInstance() ===  SingletonFactory.getInstance());
console.log( Singleton.getInstance() ===  Singleton.getInstance());

