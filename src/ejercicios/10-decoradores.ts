/*
    ===== Código de TypeScript =====
*/
//las llaves y la T es para especificar que argumento
//puede ser de tipo generico(cualquiera). EJ: abajo

// un DECORADOR no es mas que una funcion que expande su clase añadiendole
//funcionalidades especiales.
function classDecorator<T extends {new(...args: any[]): {} }>(
    constructor: T

){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {

    public miPropiedad: string ='ABC123';

    imprimir() {

        console.log('Hola Mundo');
    }
}


console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );