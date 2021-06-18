// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
const bike = [
    {
        nome : 'mtb',
        peso : 12,
    },
    {
        nome : 'classic',
        peso : 20,
    },
    {
        nome : 'elettric',
        peso : 17,
    },
    {
        nome : 'bmx',
        peso : 10,
    },
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let lightBike = bike[0];

for(let i = 1; i < bike.length; i++) {
    if(bike[i].peso < lightBike.peso){
        lightBike = bike[i];
    }
}
console.log(lightBike);

// destrutturo:
let {nome, peso} = lightBike;
console.log(nome, peso);

// stampo con template literal: 
lightBike = `
<h2>Nome: ${nome}</h2>
<h2>Peso: ${peso}</h2>
`;

document.getElementById('bici').innerHTML = lightBike;



// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// (utilizzate le arrow function). 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// sono sempre degli oggetti che contengono solo nomi 
// e falli subiti e stampiamo tutto in console.

const team = [
    {
        nome: 'genoa',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
];


 // definisco nuovo array
 // funzione per numeri random 
 const numeroRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

 let nuovoArray = [];

 for (let i = 0; i < team.length; i++) {
     let aTeam = team[i]; 
     
     aTeam.punti_fatti = numeroRandom(1, 50);
     aTeam.falli_subiti = numeroRandom(1, 20);
     
     let {nome, falli_subiti} = aTeam;

     // creo nuovo oggetto con variabili-chiavi ottenute 
     let newTeam = {
         nome,
         falli_subiti
     };
     nuovoArray.push(newTeam);
 }
 console.log(nuovoArray);



//  Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

