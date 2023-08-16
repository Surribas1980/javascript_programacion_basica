//import { rl } from "./funcionsObrigatorias.js";

//import { calcularPrecioTotal } from "./funcions/funcions.js";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let rl = readline.createInterface({ input, output });


async function func(){
  const pasarANum = await rl.question("Introduce o número de unidades que queres: ");

  return pasarANum;
}
let miCallback = (result)=>{
  if(parseInt(result) > 0){
    func().then(miCallback) 
  }else{
    rl.close()
  }
    
}
func().then(miCallback)

/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'O> ',
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
*/