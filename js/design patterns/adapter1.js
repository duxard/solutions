class Engine2 {
  simpleEngine() {
    console.log("Engine 2.0 - simple");
  }
}

class EngineV8 {
  complicatedEngine() {
    console.log("EngineV8 works");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleEngine() {
    this.engine.complicatedEngine();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleEngine();
  }
}

// usage

// Engine 2.0
const myCar1 = new Auto();
const oldEngine = new Engine2();
myCar1.startEngine(oldEngine);

// EngineV8 with adapter
const myCar2 = new Auto();
const adapter1 = new EngineV8Adapter(new EngineV8());
myCar2.startEngine(adapter1);

// ERROR (using without adapter)
const myCar3 = new Auto();
const engineV8 = new EngineV8();
myCar3.startEngine(engineV8);
