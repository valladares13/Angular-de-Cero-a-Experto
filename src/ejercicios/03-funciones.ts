/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number  {

return (a + b);

}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;

}

function multiplicar ( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;

}

/*const resultado = multiplicar( 5, 0, 10 );

console.log(resultado);*/

interface PersonajeLOR{

    nombre: string,
    hp: number,
    mostrarHp: () => void, //como inicializar una funcion

}

function curar( personaje: PersonajeLOR, curarCantidad: number): void{

    //personaje.hp = personaje.hp + curarCantidad; es lo mismo que el de abajo obv
    personaje.hp += curarCantidad;

    //console.log( personaje );

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    hp: 50,
    mostrarHp() {

        console.log( 'Puntos de vida:', this.hp );
    }

}

curar( nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();

