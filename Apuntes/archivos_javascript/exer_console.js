/*function magicNumber(min, max){
		return Math.floor(Math.random() * (max - min)) + min
	}
*/
import {magicNumber} from "./funcions.js";

    var alumnos = [
	     { nombre: "Felix", puesto: magicNumber(1, 20) },
	     { nombre: "Jesus", puesto: magicNumber(1, 20) },
	     { nombre: "Ana", puesto: magicNumber(1, 20) },
	     { nombre: "David", puesto: magicNumber(1, 20) },
	     { nombre: "Elena", puesto: magicNumber(1, 20) },
	     { nombre: "Iñigo", puesto: magicNumber(1, 20) },
	     { nombre: "Vicky", puesto: magicNumber(1, 20) },
	     { nombre: "Victor", puesto: magicNumber(1, 20) }
	 ];
	 
	 console.table(alumnos);

	var nombre = "Hola, yo soy Ulises Gascón";
	console.time("presentación");
	
	// console.log
	console.group("grupo console.log");
	console.time("tiempo grupo console.log");
	console.log("%c %s", "background: blue; color: #FFF; font-size:20px;" ,nombre);
	console.timeEnd("tiempo grupo console.log");
	console.groupEnd();
	
	
	// console.info
	console.group("grupo console.info");
	console.time("tiempo grupo console.info");
	console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
	console.timeEnd("tiempo grupo console.info");
	console.groupEnd();
	
	
	// console.warn
	console.group("grupo console.warn");
	console.time("tiempo grupo console.warn");
	console.warn("%c %s", "background: #FFAA00; color:  #95ff33; font-size:22px;" ,nombre);
	console.timeEnd("tiempo grupo console.warn");
	console.groupEnd();
	
	
	console.timeEnd("presentación");
var lenguajes = [
    { nombre: "JavaScript", extension: ".js" },
    { nombre: "TypeScript", extension: ".ts" },
    { nombre: "CoffeeScript", extension: ".coffee" }
];

console.table(lenguajes);

//console.table(lenguajes, "extension");