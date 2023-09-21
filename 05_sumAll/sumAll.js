const sumAll = function(a, b) {
    if(typeof a === "number" && typeof b === "number" && (a > 0) && (b > 0)){
        if(a > b){
            let temp = a;
            a = b;
            b = temp;
        }
        let sum = 0;
        for(let i = a; i <= b; i++){
            sum += i;
        }
        return sum;
    }
    else
        return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
