function modificarCarro(carro) {
    carro.modelo = "147";
}
var carro = { marca: "Fiat", modelo: "Uno", ano: 1998 };
let carro2 = { marca: "Fiat", modelo: "Palio", ano: 1998 };
console.log(carro);
modificarCarro(carro);
console.log(carro);
