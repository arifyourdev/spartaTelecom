let number = [2, 3, 5, 1, 3, 5, 2, 4, 5, 6];
const newSet = [...new Set(number)]
let sums = 0;

for (let x = 0; x < newSet.length; x++) {
    if (newSet[x] % 2 == 0) {
        sums += parseInt(newSet[x]);
    }
}

console.log(sums);

const str_num = "gh85hh34g3h356";
let sum = 0;


for (let i = 0; i < str_num.length; i++) {
    if (!isNaN(str_num[i])) {

        if (str_num[i] % 2 == 0) {
            sum += parseInt(str_num[i])
        }

    }
}

const nameReverse = "Developer is Khan Arif";
const nameSplit = nameReverse.split(" ").reverse().join(" ");
console.log(nameSplit)
for (let i = 0; i < nameSplit.length; i++) {
    console.log(nameSplit[i])
}

