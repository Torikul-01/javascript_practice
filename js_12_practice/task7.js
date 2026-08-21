
function findlargest(numbers){
    let largest = numbers[0];
    for(let number of numbers){
        if(number>largest){
            largest=number;
        }
    }
    return largest;
}
let numbers = [10, 20, 30, 40, 50];
let largestNumber = findlargest(numbers);
console.log(largestNumber);