//用普通函数和递归函数来实现斐波那契数列
//n1=1; n2 =1;
//首先是普通函数

function fib2(n){
    var n1 = 1, n2 =1;
    //从第3项开始

    for(var i =3; i <= n; i++){
        //每循环一次都要挪动一次n1和n2;
        var tmp = n1;
        n1 = n2;
        n2 = tmp+ n2;
    }

    //循环后n2就是所求项的值
    return n2;
}