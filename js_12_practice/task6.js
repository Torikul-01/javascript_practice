function getEvenNumbers(numbers) {
    let evenNumbers = [];
    for(let number of numbers){
        if(number %2===0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);