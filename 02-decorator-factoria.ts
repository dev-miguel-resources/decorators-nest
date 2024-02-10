// 1. decorador de tipo factoria/función
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}
    
@Logger("Loggin - Person")
class Person {

    name = "Jaimecillo"

    constructor() {
        console.log("Person class constructor")
    }
}

const person = new Person()
  