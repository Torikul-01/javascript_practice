function countEventNumber(number){
    let count=0;
    if(number%2===0){
        count+=1;
    }
    else{
        count+=0;
    }
    return count;
}
let number=[1,2,3,4,5,6,7,8,9,10];
let evenCount = countEventNumber(number);
console.log(evenCount);