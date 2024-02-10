// 1. decorador de tipo clase
function Logger(constructor: Function) {
    console.log("Logging");
    console.log(constructor);
}

@Logger
class Person {

    name = "Jaimecillo"

    constructor() {
        console.log("Person class constructor")
    }
}

const person = new Person()
  