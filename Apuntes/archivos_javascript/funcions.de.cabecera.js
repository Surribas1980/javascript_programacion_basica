import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let rl = readline.createInterface({ input, output });

export{
  rl
}