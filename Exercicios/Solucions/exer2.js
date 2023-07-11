import { rl } from "./funcionsObrigatorias.js";
import { pasarNumAAbsoluto } from "./funcions/funcions.js"

    
const stringLido = await rl.question('Introduzca un valor negativo: ');
    
const aNum = parseInt(stringLido);

console.log('O valor absoluto é : ',pasarNumAAbsoluto(aNum)) ;
  
rl.close();
    
