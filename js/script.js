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

// stampo con template l:





// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi 
// e falli subiti e stampiamo tutto in console.