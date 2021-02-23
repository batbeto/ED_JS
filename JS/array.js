arry = []
tamanho = 200
for (let i = 0; i < tamanho; i++ ){
    arry.push(i);
    arry.unshift(-i);
}

console.log(arry)