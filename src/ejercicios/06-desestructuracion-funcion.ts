/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE ARGUMENTOS

export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150

}
const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350

}
export function calculaISV( productos: Producto[] ): [number, number]{

    let total = 0; //se pone como let y no como const porque su valor variará
    /*productos.forEach( ( producto: Producto )=>{
        total += producto.precio;

    } )
    return total * 0.15;
    */

    productos.forEach( ( { precio } )=>{
        total += precio;

    } )
    return [total,total * 0.15];
}


const articulos = [telefono, tableta ];

/*const isv = calculaISV( articulos )
console.log('ISV', isv );*/

//DESESTRUCTURADO
const [ total, isv ] = calculaISV( articulos )
console.log('total', total );
console.log('ISV', isv );