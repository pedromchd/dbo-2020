// Ctrl + Shift + L: escolher JavaScript
// Ctrl + Shift + P: start quokka on current file
function binary(n) {
  if (n === 0) {
    return 0;
  }
  let binary = '';
  while (n > 0) {
    binary = (n % 2) + binary;
    n = parseInt(n / 2);
  }
  return binary;
}

console.log(binary(19));
console.log(binary(0));
console.log(3 + 5);

console.log('a😜la' [1]);
console.log('aula'[0]);
// UNICODE (URF-8)
