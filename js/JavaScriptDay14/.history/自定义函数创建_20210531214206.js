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

var res2 = getMax2(5, 10, 100 )