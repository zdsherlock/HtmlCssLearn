//创建函数getMax, 传递任意两个数字返回最大值 
//创建函数getMax2,传递任意三个数字，返回最大值

function getMax(num1, num2){
    if ( num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

function getMax2(num1, num2, num3){
    var max;

    if (num1 > num2){
        max = num1;
    } else {
        max = num2;
    }

    if (max > num3){
        return max;
    }else{
        return num3;
    }
}

var res = getMax(5, 10);
var res_a = getMax(100, 50);
var res_undefined = getMax(100);

var res2 = getMax2(5, 10, 100);
var res2_a = getMax2(10, 5, 100);
var res2_b = getMax2(100, 10, 5);
var res2_undefined = getMax2(50, 60);

console.log('res', res);
console.log('res_a', res_a);
console.log('res_undefined', res_undefined);

console.log('res2', res2);
console.log('res2_a', res2_a);
console.log('res2_b', res1_b);
console.log('res2_undefined', res2_undefined);