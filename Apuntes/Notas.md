# Antes de comenzar 

> Para poder realizalos exercicios, deberemos insertar as seguintes líneas de código

```javascript
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
```

Posteriormente, cando queiramos introducir texto deberemos utilizar o seguinte código:

```javascript
const answer = await rl.question('Ingresa un número:  ');
```
Neste caso, estamos a facela pregunta seguinte: 
```
Ingresa un número: 
```

Pra que se escriba o número por consola, podemos utilizar a función 'console.log(' ')', introducindo o seguinte código:

```javascript
console.log('O número introducido foi: ',answer)
```


Para executar este arquivo, deberemos escribir na consola o seguinte:

```
node <nome de arquivo a executar>
```
neste caso o arquivo chámase index.js, polo que deberemos escribir:
```
node index
```
ou
```
node index.js
```
Cando executamos os comandos, sairá por pantalla o seguinte:


![](./imaxenes/peticion_do_primeiro_numero.png)
No momento que se produce dita saída, deberemos ingresalo número, deste xeito sairá a seguinte saída:


![](./imaxenes/shell_inicio_0.png)
