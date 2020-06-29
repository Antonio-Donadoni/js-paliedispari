
var giocaBtn = document.getElementById('gioca');

gioca.addEventListener("click", function() {

var pariDispari = document.getElementById('pari-dispari').value;

var numeroUtente = document.getElementById('numero').value;
numeroUtente = parseInt(numeroUtente);

var numeroAI = getRandomIntInclusive(0,5);

var sommaNumeri = numeroUtente + numeroAI;

document.getElementById('somma').innerHTML = numeroUtente + " + " + numeroAI + " = " + sommaNumeri;

var risultato
if (sommaNumeri % 2 == 0) {
  risultato = "pari";

} else {
  risultato = "dispari";
}

if (risultato == pariDispari) {
  document.getElementById('risultato').innerHTML = "HAI VINTO!!!"
}
else {
  document.getElementById('risultato').innerHTML = "HAI PERSO!!!"
}
})





// FUNZIONI

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
