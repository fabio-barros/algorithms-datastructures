// const g = s.match(/(.{5})/g);
function isVowel(vowel) {
    return vowel && vowel.match(/([aeiou])/) 
}

const s = 'oaehubwsençrfdseiuoseaesergtt';
const k = 5;

//Filtrando substrings tamanho k da string s
let k_SizeStrings = []
for(letterIndex in s) k_SizeStrings.push(s.slice(letterIndex, Number(letterIndex)+k))
k_SizeStrings = k_SizeStrings.filter(str => str.length === k)

const substringVowels = k_SizeStrings.map((str) =>  {
    re = /([aeiou])/g
    return re.test(str) ? str.match(re).join("") : ""
})

const mostVowelsSubstring = substringVowels.reduce((a,b) => a.length === b.length ? a : a.length > b.length ? a : b)

console.log(k_SizeStrings, substringVowels, mostVowelsSubstring)
console.log(substringVowels.indexOf(mostVowelsSubstring))
console.log(k_SizeStrings[substringVowels.indexOf(mostVowelsSubstring)])





// let arr = []
// for(letterIndex in s) arr.push(s.slice(letterIndex, Number(letterIndex)+k))

// const arr2 = arr.filter(str => str.length === k).map((str) =>  {
//     re = /([aeiou])/g
//     return re.test(str) ? str.match(re).join("") : ""
// })
