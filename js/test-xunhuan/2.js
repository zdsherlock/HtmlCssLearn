var i = 1;
var sum = 1;
do {
    
    if (i%3 ===0) {
        sum *= i;
        console.log(i);
    }

    i++;
}while(i<=20)

console.log(sum);