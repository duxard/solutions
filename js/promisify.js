const globalVar = true;
            
function notification(value, handler) {
    if(value){
        handler(null, 1, 2, 3, 4); //many arguments
    } else {
        handler(new Error('Error'));
    }
}


function primisify(f, manyArguments = false){
    return function(...args){
        return new Promise((res, rej) => {
            function callback(err, ...results){
                if(err){
                    return rej(err);
                } else {
                    return res(manyArguments ? results : results[0]);
                }
            }

            args.push(callback);
            f.call(this, ...args);
        });
    }
}

/***************************************************/


// only one arguments will be processed in case of primisify(notification)
let promisifiedNotify =  primisify(notification, true); 
promisifiedNotify(globalVar).then(data => cl(data)).catch(e => cl(e));