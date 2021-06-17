/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe { 
    nombre: string;
    edad: number,
    direccion: { /*esto esta mal hecho por motivos de codigo limpiom,
       hay que declararlo en una nueva interfaz.ABAJO EJEMPLO DIRECCION */
        calle: string,
        ciudad: string,
        pais: string
    },
    mostrarDireccion:() => string; //obligatorio decir que tipo de datos devuelve

}

interface Direccion{
    calle:string,
    pais: string,
    ciudad: string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30, 
    direccion: {
        calle: 'Main St',
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
1
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );