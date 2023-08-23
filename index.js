/*import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const answer = await rl.question('Ingresa texto: ');
console.log('O elemento é : ',answer.length,answer[3])

*/

/* Exemplo 1
const answer = await rl.question('Ingresa primer número: ');




const answer2 = await rl.question('Ingresa segundo número: ');
let resultado = parseInt(answer) + parseInt(answer2)
console.log(`A suma é: ${resultado}`);
rl.close();*/

//rl.close();
/*
export {
  input,
  output,
  rl
}
*/

/*let datos = [1,2,3];
let outrosDatos = [4,5,6];
let arrayDeArrays = [datos,outrosDatos];
console.log(`Este é o array de arrays ${arrayDeArrays}`)
console.log(arrayDeArrays,' .... este é outro elemento individual: ',arrayDeArrays[0]);
console.log(arrayDeArrays[0][1])
console.log('lonxitude de arrayDeArrays[0] : ', arrayDeArrays[0].length)*/
//console.log(datos[-2],datos.at(1),datos.at(-2))
/*let creoArray = [];
console.log('creoArray ',creoArray)
console.log('engado elemento: ', creoArray.push(6))
console.log(creoArray)
console.log('engado elemento: ', creoArray.push(8))
console.log(creoArray)
console.log('engado elemento: ', creoArray.push(9))
console.log(creoArray)
console.log('saco elemento dende ...',creoArray.shift())
console.log(creoArray)
console.log('saco elemento dende ...',creoArray.shift())
console.log(creoArray)

console.log('agrego ...',creoArray.unshift("juan"))
console.log(creoArray)
console.log('agrego ...',creoArray.unshift("pepe",89))
console.log(creoArray)*/

/////////////////
/*console.log('saco o elemento: ',creoArray.pop())
console.log(creoArray)
console.log('saco o elemento: ',creoArray.pop())
console.log(creoArray)*/


//console.log(' o resto da división ',)

let oMeuTexto = 'boas'
let outroTexto = 'BOAS DE NOVO'
/*console.log('o tipo é ', typeof oMeuTexto)

console.log('valor ',oMeuTexto.length,oMeuTexto[0])
console.log('Poño en maiusculas: ', oMeuTexto.toUpperCase())*/
console.log('Poño en minusculas: ', `${outroTexto}`[6].toLowerCase())


/// indexOf

console.log(outroTexto.indexOf('bOAS'),outroTexto.indexOf('A'))
console.log('outra forma de acceder: ','BOAS DE NOVO'.indexOf('O'))
let cadeaBuscada = 'NOVO'
console.log('onde está a seguinte: ',outroTexto.indexOf('O',3))
console.log('busco cadea con includes: ',outroTexto.includes(`${cadeaBuscada}`))

console.log('busco cadea con startsWith: ',outroTexto.startsWith(`${cadeaBuscada}`))
console.log('busco cadea con endsWith: ',outroTexto.endsWith(`${cadeaBuscada}`))




