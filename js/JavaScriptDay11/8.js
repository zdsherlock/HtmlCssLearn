//使用函数表达式创建函数，计算任意两个数字之间所有整数相加的和，并返回结果

var add = function(a, b) {
    //循环 a~b
    for (var i = a, sum = 0; i <= b; i++) {
        sum+=i;
    }
    return sum;
}

console.log( add(1, 100) );