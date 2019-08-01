const pipe = (...fns) => store => fns.reduce((initialStore, fn) => fn(initialStore), store);

function Animal(name){
    return {
        name,
        getName: () => console.log(this.name)
    }
}

function CanBite(o = {}){
    return {
        ...o,
        bite: () => () => console.log("I can bite")
    }
}

function CanBark(o = {}){
    return {
        ...o,
        bark: () => () => console.log("I can bark")
    }
}

function CanHunt(o = {}){
    return {
        ...o,
        hunt: () => () => console.log("I can hunt")
    }
}

function CanRun(o = {}){
    return {
        ...o,
        run: () => () => console.log("I can run")
    }
}

// Create new instance of Animal
const dog = pipe(
    () => Animal("Lessy"),
    CanBite,
    CanBark,
    CanHunt,
    CanRun
)({});

// Usage
dog.getName();
dog.bite();
dog.hunt();
dog.bark();
dog.run();
