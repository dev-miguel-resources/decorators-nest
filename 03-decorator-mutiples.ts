// 3. decoradores múltiples: se leen de abajo hacia arriba
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function CacheData(ttl: number) {
    return function(constructor: Function) {
        console.log("ttl", ttl);
    }
}

@CacheData(10000) 
@Logger("Loggin - Person")
class Person {

    name = "Jaimecillo"

    constructor() {
        console.log("Person class constructor")
    }
}

const person = new Person()