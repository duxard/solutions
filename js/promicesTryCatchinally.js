
let env = false;

let p = new Promise((res, rej) => {
    if(env){
        res('SUCCESS');
    } else {
        rej('FAIL');
    }
});

// 1st variant

p.then(data => console.log(data))
    .catch(e => console.log(e))
    .finally(() => console.log('FINALLY'));

// 2nd variant
async function foo(){
    let res;
    try{
        res = await p;
        cl(res);
    } catch(e){
        cl(`_Err: ${e}`);
    } finally {
        cl('THE END');
    }
    cl('lol')
}

foo();
