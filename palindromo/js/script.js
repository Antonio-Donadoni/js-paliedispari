

function isPalindromo(parola) {

 parola = parola.toLowerCase();

  // SCOMPONGO PAROLA IN LETTERE
  var lettereParola = [];
  for (var i = 0; i < parola.length; i++) {
    lettereParola.push(parola[i]);
  }
  console.log(lettereParola);

  // SCONPONGO PAROLA IN LETTERE IN ORDINE INVERSO

  var lettereParolaInv = [];

  for (var i = (parola.length - 1); i >= 0; i--) {
    lettereParolaInv.push(parola[i]);
  }
  console.log(lettereParolaInv);

  // CONFRONTO I DUE ARRAY
  var isPalindromo = true;

  for (var i = 0; i < lettereParola.length; i++) {
    if (lettereParola[i] != lettereParolaInv[i]) {
      isPalindromo = false;
    }
  }

  if (isPalindromo) {
    console.log("la parola è un palindromo");
  } else {
    console.log("la parola non è un palindromo");
  }

}

isPalindromo("Anna");
isPalindromo("Franco");
