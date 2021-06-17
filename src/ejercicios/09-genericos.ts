/*
    ===== Código de TypeScript =====
*/
//las llaves y la T es para especificar que argumento
//puede ser de tipo generico(cualquiera). EJ: abajo
function queTipoSoy<T>(argumento: T){ 
    return argumento;                 
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumber = queTipoSoy(100);
let soyArreglo = ([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>(100);
