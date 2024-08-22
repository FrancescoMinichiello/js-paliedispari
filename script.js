/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//2- creare una funzione
//3- stampare in console

//!Fase di preparazione
//1- Chiedere all'utente una parola
const word = prompt('Inserisci una parola', 'osso');
console.log(word);
//divido la parola
const splitWord = word.split('');
console.log(splitWord);
//Inverto la parola
const reversedWord = splitWord.join('');
console.log(reversedWord);

if (word === reversedWord) {
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}

























/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
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