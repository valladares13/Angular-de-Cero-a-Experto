/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE OBJETOS

interface Reproductor {
volumen: number,
segundo: number,
cancion: string,
detalles: Detalles

}

interface Detalles{
autor: String,
anio: number,

}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:
    {
        autor: 'Ed Sheeran',
        anio: 2019
    }
}


/*

console.log( 'el volumen actual es de: ', reproductor.volumen);
console.log( 'el segundo actual es de: ', reproductor.segundo);
console.log( 'La cancion actual es de: ', reproductor.cancion);
console.log( 'el Autor es: ', reproductor.detalles.autor);

*/

//EL EJEMPLO SIGUIENTE, ES LO MISMO QUE EL DE ARRIBA
// PERO DESESTRUCTURANDO DATOS PARA UNA LECTURA MAS SIMPLE



const { volumen, segundo,cancion, detalles } = reproductor;
const { autor } = detalles;

/*
console.log( 'el volumen actual es de: ', volumen);
console.log( 'el segundo actual es de: ', segundo);
console.log( 'La cancion actual es de: ', cancion);
console.log( 'el Autor es: ', autor);

*/

//OTRO EJEMPLO MAS PERO OBVIANDO DETALLES

/*

const autor = 'Fulano';// esto es un ejemplo si quiero 
cambiar el nombre a un tipo de dato(detalles(string))
const { volumen, segundo,cancion, detalles:{autor: autorDetalle} } = reproductor;

console.log( 'el volumen actual es de: ', volumen);
console.log( 'el segundo actual es de: ', segundo);
console.log( 'La cancion actual es de: ', cancion);
console.log( 'el Autor es: ', autorDetalle);

*/


/*------------------------------------------------------------------------------ */

const dbz: string[]= ['Goku', 'Vegeta','Trunks'];

const [ jaime , , p3 ] = dbz;

// console.log( 'Personaje 1:',dbz[0]);
// console.log( 'Personaje 2:',d    bz[1]);
console.log( 'Personaje 3:', p3);
console.log( 'Personaje 1:', jaime);