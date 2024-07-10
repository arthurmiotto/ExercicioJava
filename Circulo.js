function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

// Exemplo de uso
let raio = 3;
let area = calcularAreaCirculo(raio);
console.log(`A área de um círculo com raio ${raio} é ${area.toFixed(2)}`);