// Stack

let Stack = (function(){

  let store = [];

  class Stack {
    put(val){
      store.push(val);
    }

    rem(){
      if(!store.length){
        throw new Error('Stack is empty');
      }
      return store.pop();
    }

    // make stack iterable (for..of)
    [Symbol.iterator]() {
      return {
        i:  0,
        j: -1,

        next() {
          if (this.i < store.length) {
            this.i++;
            this.j++;
            return { value: store[this.j], done: false };
          }
          return { value: undefined, done: true };
        }
      }
    }
  }

  return Stack;
})();


let st = new Stack();
st.put(10);
st.put(20);
st.put(30);
st.rem();

for(let val of st){
  console.log(val);
}
