function pr(){
	cl( Array.prototype.join.call(arguments, ':') );
}

function decor1(fn){
	return function(){
		fn.apply(this, arguments);
	}
}

let wrapped1 = decor1(pr);
wrapped1(1,2,3);


let decor2 = fn => (...args) => fn.apply(this, args);
let wrapped2 = decor2(pr);
wrapped2(4,5,6);