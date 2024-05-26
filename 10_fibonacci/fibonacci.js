const fibonacci = function(a) {
    if(a < 0) return "OOPS";
    a = +a;
    let countFirst = 0;
    let countSecond = 1;
    let result = 0;
    for(let i = 0; i < a; i++){
        result = result + countSecond;
        countSecond = result;
    }
};

// 0    1	1	2	3	
// Do not edit below this line
module.exports = fibonacci;
