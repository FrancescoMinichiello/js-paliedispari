/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//1- Chiedere all'utente una parola
//2- creare una funzione
//3- stampare in console
/*
function palindroma(parola) {
    const splitWord = parola.split('');

    //Inverto la parola
    let result = []
    for (let i = splitWord.length - 1; i >= 0; i--) {
        result.push(splitWord[i])
    }
    const reversedWord = result.join('');
    let risultato = parola === reversedWord ? true : false
    return risultato
}


//!Fase di preparazione
const word = prompt('Inserisci una parola', 'cane');

//divido la parola

if (palindroma(word)) {
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}
*/





















/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento!
*/


//1 chiedere all'utente un numero
//2 generare un numero random da 1 a 5 per il computer usando una funzione

//Fase di preparazione
//creo la funzione per generare un numero
function randomCpuNumber() {
    let min = 1;
    let max = 5;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    if (number % 2 === 0) {
        console.log('il numero è pari');
        return true;
    } else {
        console.log('il numero è dispari');
        return false;
    }
}


const cpuNumber = randomCpuNumber();
console.log(`la CPU sceglie: ${cpuNumber}`);

let playerNumber = parseInt(prompt('dimmi un numero da 1 a 5', parseInt(4)))
console.log(`Il numero che hai scelto è: ${playerNumber}`);

let playerChoise = prompt('Scegli "pari" o "dispari"', 'pari').toLowerCase();
console.log(`Hai scelto: ${playerChoise}`);

let sum = cpuNumber + playerNumber;
console.log(`La somma dei numeri è: ${sum}`)

let sumIsEven = isEven(sum);

if ((playerChoise === 'pari' && sumIsEven) || (playerChoise === 'dispari' && !sumIsEven)) {
    console.log('Complimenti! Hai vinto!');
} else {
    console.log('Peccato! La CPU ha vinto.');
}



