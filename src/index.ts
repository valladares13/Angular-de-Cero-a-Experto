/*
    ===== Código de TypeScript =====
*/
//las llaves y la T es para especificar que argumento
//puede ser de tipo generico(cualquiera). EJ: abajo


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