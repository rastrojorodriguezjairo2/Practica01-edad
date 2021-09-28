import {leerTeclado} from './util/entradaTeclado'
console.log("Buenos días")
//Creamos la variable función main que llamamos main 
let main = async () => {
    let edad : number
	const valor = await leerTeclado ('¿Cuantos años tienes?')
    edad = parseInt (valor)
    if (edad < 18) {
        console.log(`Con que tienes ${valor} entonces eres menor de edad, con años, estás chiquito todavía`)
    } else console.log(`Con que tienes ${valor} entonces eres mayor de edad, ya puedes ir a la cárcel`)
    }
//invocamos a la función 
main();