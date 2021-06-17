/*
    ===== Código de TypeScript =====
*/

/*class PersonaNormal{  PARA NO TENER QUE HACER TODAS ESTAS DECLARACIONES
    nombre: string;     Y DEFINIRLAS PORQUE ES MUY TEDIOSO, SE REALIZA
    direccion: string;  DE LA FORMA DE ABAJO

    constructor(
        nombre: string, direccion: string
    ){
        this.nombre = nombre;
        this.direccion = direccion;
    }

}*/

class PersonaNormal{

    constructor(
        public nombre: string, 
        public direccion: string)
        {
        }
}
class Heroe extends PersonaNormal{ //CON EL EXTENDS, EXTENDEMOS LA CLASE 
   // alterEgo: string;                PERSONA NORMAL PARA USAR SUS ATRIBUTOS.
   // edad: number;         En vez de declarar los valores aqui, 
   // nombreReal: number;   los declaramos en el constructor

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
        ){
        super( nombreReal, 'New York, USA' );
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);