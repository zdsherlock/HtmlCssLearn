function fib2(n) {
    var n1 = 1, n2 = 1;
    //从第3项开始

    for (var i = 3; i <= n; i++) {
        //每循环一次都要挪动一次
        var tmp = n1;
        n1 = n2;
        n2 = n1 + n2;
        
    }
    //循环后n2就是所求项的值
}