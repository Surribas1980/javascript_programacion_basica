import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

/* Exemplo 1
const answer = await rl.question('Ingresa primer número: ');
fd


const answer2 = await rl.question('Ingresa segundo número: ');
let resultado = parseInt(answer) + parseInt(answer2)
console.log(`A suma é: ${resultado}`);
rl.close();*/

rl.close();

