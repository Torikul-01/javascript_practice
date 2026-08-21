function checkNumber(num){
    if(num > 0){
        return "Positive";
    }
    else if(num < 0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
let checkResult = checkNumber(-3);
console.log(checkResult);