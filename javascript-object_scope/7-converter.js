function convertBase(number, fromBase, toBase) {
    const decimal = parseInt(number, fromBase);
    return decimal.toString(toBase);
}

console.log(convertBase(36, 10, 16));
console.log(convertBase(92, 10, 8));
console.log(convertBase(30, 10, 2));