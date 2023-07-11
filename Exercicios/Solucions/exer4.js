import { rl } from "./funcionsObrigatorias.js";

import { calcularPrecioTotal } from "./funcions/funcions.js";

const pasarANum = await rl.question("Introduce o número de unidades que queres: ");

const numUnidades = parseInt(pasarANum);

const precioTotal = calcularPrecioTotal(numUnidades)

console.log('O precio total é: ', precioTotal , '€')

rl.close()