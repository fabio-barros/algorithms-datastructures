const arr = [1,1,0,-1,-1]

let zeroes = 0;
let positives = 0;
let negatives = 0;

for (const value of arr) {
    value > 0 ? positives++ : value < 0 ? negatives++ : zeroes++ 
}

console.log(parseFloat(positives/arr.length).toFixed(6))
console.log(parseFloat(negatives/arr.length).toFixed(6))
console.log(parseFloat(zeroes/arr.length).toFixed(6))