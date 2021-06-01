//创建函数 ，比较任意三个数字的大小，返回最大值

function getMax (a, b ,c) {
    // if (a > b) {
    //     if (a > c)
    //     {
    //         return a;
    //     }
    //     else 
    //     {
    //         return c;
    //     }
    // }else {
    //     if ( b > c)
    //     {
    //         return b;
    //     }
    //     else {
    //         return c;
    //     }
    // }

    var max;

    if (a>b)
    {
        max = a;
    }
}

var num1= getMax(1,2,3);
var num2 = getMax(3,2,1);

console.log(num1,num2);