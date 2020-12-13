// exercicio.js
console.log('exercicio.js');

// proibido a biblioteca (Math, etc)
// exceto: String.charAt, String.length

// function hamming(p1, p2) {
//   let distancia = 0;
//   //
//   return distancia;
// }

const hamming = function(p1, p2) {
  let length;
  (p1.length > p2.length) ? length = p1.length : length = p2.length;
  let distancia = length;
  for (let i = 0; i < length; i++) {
    if(p1[i] === p2[i]) {
      distancia--;
    }
  }
  return distancia;
};

// TESTES / ESPECIFICAÇÃO
// hamming distance: distância entre duas strings
// caminho "feliz"
console.log(hamming('aula', 'alta') === 2);
console.log(hamming('aula', 'ifrs') === 4);
console.log(hamming('aula', 'nata') === 3);
console.log(hamming('aula', 'aula') === 0);
// casos especiais (egde cases)
console.log(hamming('alta', 'aula') === 2);
console.log(hamming('aula', 'au') === 2);
console.log(hamming('aula', 'tq') === 4);
console.log(hamming('aula', 'auladehoje') === 6);

console.log(hamming('info', 'i') === 3);
console.log(hamming('info', 'a') === 4);
console.log(hamming('info', 'in') === 2);
console.log(hamming('info', 'inq') === 2);
// edge case
console.log(hamming('info', 'infoq') === 1);


// function indexOf(palabra, letra) {
//   let index = -1;
//   for (let i = 0; i < palavra.length; i++) {
//     if (palavra[i] === letra) {
//       index = i;
//       break;
//     }
//   }
//   return indexOf;
// }

// console.log(indexOf('aula', 'u') === 1);

