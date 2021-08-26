'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let vales = 0; //pra contar o numero de vales
    let elev = 0; // pra contar a elevacao
    for (let i = 0; i < steps; i++) { // o i eh do contador
        // ai ele pergunta se o i eh menor q os passos, se for bota +1
        if (path[i] == 'D') { // aqui ele coloca se o caminho eh igual a d
            elev--; //se for eh pra diminuir elevacao
        }
        else { //se n for roda o codigo daqui
            if (elev == -1) { // aqui eh pra caso a eleva for negativa
                vales++; // coloca mais vales
            }
            elev++; //aqui continua o else
        }
    }
    return vales;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
