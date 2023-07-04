import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/* Exemplo 1
const answer = await rl.question('Ingresa primer número: ');



const answer2 = await rl.question('Ingresa segundo número: ');
let resultado = parseInt(answer) + parseInt(answer2)
console.log(`A suma é: ${resultado}`);
rl.close();*/

let cont = 0;
let suma = 0;
let numero;
let media;
numero = await rl.question('(-1 para acabar )  Introduzca un nuevo valor: ');
//estructura repetitiva 'hacer ... mientras'

do{

	suma = parseInt(suma) + parseInt(numero);
	numero = await rl.question('(-1 para acabar ) Introduzca un nuevo valor: ');
	//console.log('la suma está siendo:  ',suma);
}while(parseInt(numero) != 0);

console.log('la suma total es ',suma);

/*
//estructura repetitiva 'mientras'
while(parseInt(numero) != -1){
	cont += 1;
	suma = parseInt(suma) + parseInt(numero);
	numero = await rl.question('(-1 para acabar ) Introduzca un nuevo valor: ');
	console.log('la suma es ',suma)
}

//estructura condicional
if(cont == 0){
	console.log('Imposible calcular la media')
}else{
	media = parseInt(suma)/parseInt(cont);
	console.log(`La media es: ${media}`)
}

*/

rl.close();

