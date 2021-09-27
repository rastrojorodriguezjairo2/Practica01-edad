import {leerTeclado} from './util/entradaTeclado'
console.log("Buenos días")
//Creamos la variable función main que llamamos main 
let main = async () => {
	const valor = await leerTeclado ('¿Cuantos años tienes?')
	console.log(`Tienes: ${valor} años`)
    if (valor < `18`) {
        console.log(`Eres menor de edad, estás chiquito todavía`)
        
    } else console.log(`Eres mayor de edad, ya puedes ir a la cárcel`)
}
//invocamos a la función 
main();