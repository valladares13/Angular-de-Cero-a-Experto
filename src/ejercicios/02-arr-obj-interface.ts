/*
    ===== Código de TypeScript =====
*/

let habilidades:string[] =['Bash', 'Counter', 'Healing'];

//habilidades.push('pedro'); //push es para meter valores en el array/arreglo

//OBJETOS EN JAVASCRIPT

interface Personaje {
nombre : string,
hp: number,
habilidades: string[],
puebloNatal?: string, //El interrogante es para hacerlo opcional.

}

const personaje: Personaje= {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'pueblo paleta';

console.table( personaje );