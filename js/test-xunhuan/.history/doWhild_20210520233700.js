//计算1~100之间所有能被7整除的数字的和
var i = 1;
var sum = 0;
do {
    i++;
    if (i%7 ===0) {
        sum+=i;
    }
} while(i<=100)
console.log(sum);