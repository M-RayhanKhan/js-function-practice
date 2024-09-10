function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
// console.log(add(5, 90));

function add2(price1, price2){
    return price1 + price2
}
// console.log(add2(20, 25));

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
};
const result = doMath(10, 5);
console.log(result);