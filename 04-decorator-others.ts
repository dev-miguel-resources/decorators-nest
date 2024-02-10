// 4. todos los otros tipos: property, accesor, method, paramater

// target: es la clase donde está la propiedad
// propertyName: la propiedad en sí
/*function Log01(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator");
    console.log(target, propertyName)
}*/

// descriptor: te entrega el detalle de acceso del recurso asociado al decorador 
// el cual puede en algún momento ser adaptado
function Log02(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accesor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log03(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log04(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    
    //@Log01
    title: string;
    private _price: number; 

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price
    }

    /*@Log02
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw "Invalid price - it should be positive";
        }
    }*/

    @Log03
    getPriceWithTax(tax01: number, @Log04 tax: number) {
        return this._price * (1 + tax / 100);
    }
}

const product = new Product("PlayStation 5", 2000)
//product.price = -10;
console.log("Price with tax", product.getPriceWithTax(100, 10));