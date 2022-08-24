var a = 10;

{
    var a = 20;
    console.log(`var Dentro do bloco: ${a}`);
}
console.log(`var Fora do bloco: ${a}`);

let b = 10;

{
    let b = 20;
    console.log(`let Dentro do bloco: ${b}`);
    {
        b = 25;
        console.log(`let Dentro do bloco 2: ${b}`);
    }
    console.log(`let Fora do bloco 2: ${b}`);
}
console.log(`let Fora do bloco: ${b}`);

function fun() {
    var a = 6;
    console.log(`var Dentro da função: ${a}`);
}

fun();
console.log(`var Fora da função: ${a}`);
