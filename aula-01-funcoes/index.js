// index
console.log('index.js');

hello('Emilly');

// função hello com parâmetro nome
function hello(nome) {
  console.log('Hello', nome);
}

// chamar, invocar função
hello('Márcio');

// bye('Guilherme');

const bye = function(nome = 'Nobody') { // valor padrão
  console.log('bye', nome);
};

bye('Enzo');
hello(); // undefined
bye();
hello('Márcio', 'Torres');

const teste = hello('Marina');
console.log(teste);

function ola(nome) {
  return 'Olá ' + nome;
}

const tchau = function(nome) {
  return `Tchau ${nome}`;
};

console.log(ola('André'));
console.log(tchau('Vitor'));
document.write(tchau('Patrick'));

const dobro = function(num) { // parâmetro num
  return 2 * num;
};

console.log(dobro(3)); //3 é o argumento
console.log(dobro('3'));
console.log(dobro('info'));

// assertiva
console.log(dobro(5) === 10);

const triplo = function(n) {
  return n + n + n;
};

console.log(triplo(4) === 12);
console.log(triplo(5) === 15);
console.log(triplo(6) === 18);
// console.assert(triplo(5) === 15, 'triplo de 5 é 15');





