// condicionais
// if, else if, else
// switch, case
// cond ? exp : exp (ternário)
// operadores booleanos: == ou ===, != ou !==,
// <, >, <= ou >=, ! (not), instanceof

const idade = parseInt(prompt('Idade:'));
console.log(idade);
if (idade > 17) {
  console.log('maior de idade');
} else {
  console.log('menor de idade');
}

let x = false; // false, '', 0, NaN, null, undefined são falsos
if (x) {
  console.log('x é verdadeiro');
} else {
  console.log('x é falso');
}

if (idade) { // if alinhado (nesting)
  if (idade <= 10) {
    console.log('criança');
  } else if (idade <= 14) {
    console.log('pré-adolescente');
  } else if (idade <= 18) {
    console.log('adolescente');
  } else {
    console.log('adulto');
  }
}
// evitar switchs
switch (idade) { // fallback
  case 10: console.log('10 anos'); break;
  case 11: console.log('11 anos'); break;
  case 12:
  case 13:
  case 14: console.log('de 12 a 14');
  default: console.log('???');
}

// expressão ternária (if inline)
console.log(idade > 17 ? 'maior' : 'menor');

console.log(10 == '10'); // true
console.log(10 === '10'); // false
