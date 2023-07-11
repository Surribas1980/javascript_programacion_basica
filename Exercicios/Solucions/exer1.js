import { rl } from "./funcionsObrigatorias.js";

const a = await rl.question('Ingresa número a: ');
const b = await rl.question('Ingresa número b: ');


const aEmaior = parseInt(a) > parseInt(b);
const bEmaior = parseInt(a) < parseInt(b);

if(aEmaior){
  console.log('O número a é maior que b')
}

if(bEmaior){
  console.log('O número b é maior')
}
if(!aEmaior && !bEmaior){
  console.log('son iguais')
}



rl.close();