function sumArray(numbers) {
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const number = [12, 15, 87, 32, 2 ,6, 33];
const result = sumArray(number)
console.log('sum of all numbers: ', result);