function even(numbers){
    let sumEven = 0;
    for(const number of numbers){
        if (number % 2 === 0) {
            sumEven = sumEven + number;
        }
    }
    return sumEven;
}
const numbers = [82 ,25 , 32 ,11, 25 ,64 ,70 , 2]
const result = even(numbers);
console.log('sum all even numbers: ',result);