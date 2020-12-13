// laços de repetição (loops)
// while (enquanto), do while (faça enquanto)
// for (para): for (;;), for (in), for (of)
let x;
do {
  x = prompt('x');
} while (x);
console.log('fim');

let y = 0;
while (y < 10) {
  console.log(y++);
  // y = y + 1;
  // y++;
  // y += 1;
  // ++y;
}

// let mantém o escopo, var não tem escopo
for (let q = 5, w = 8; q < 10 && w < 15; q++, w+=2) {
  console.log(q, w);
}
// console.log(q);
const nomes = ['Th', 'Pedro', 'Alex'];
            //  0       1       2
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
// lista inversa
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}
// para cada (for each, for of)
// para cada indivíduo de um coletivo
// para cada nome dos nomes
for (const nome of nomes) {
  console.log(nome);
}

for (const q of [3,4,5,6]) {
  console.log(q);
}
// const conjunto = new Set([4,5,4,6]);
// for (const item of conjunto) console.log(item);
// nomes.forEach(console.log);
