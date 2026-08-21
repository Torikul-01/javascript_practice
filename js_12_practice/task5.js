function sumArray(numbers) {
    let sum =0;
    for(let number of numbers){
        sum=sum+number;
    }
    return sum;
}
let numbers = [10, 20, 30, 40, 50];
let totalSum = sumArray(numbers);
console.log(totalSum);