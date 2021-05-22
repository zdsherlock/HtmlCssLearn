var i = 1;
var sum = 1;
do {
    i++;
    if (i%3 ===0) {
        sum *= i;
    }
}while(i<=20)

console.log(sum)