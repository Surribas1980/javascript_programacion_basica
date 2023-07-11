import { rl } from "./funcionsObrigatorias.js";
import { pasarNumAAbsoluto } from "./funcions/funcions.js"

    
const stringRead = await rl.question('Introduzca un valor negativo: ');
    
const aNum = parseInt(stringRead);

console.log('O valor absoluto é : ',pasarNumAAbsoluto(aNum)) ;
  
rl.close();
    
