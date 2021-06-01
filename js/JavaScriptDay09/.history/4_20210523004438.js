//创建函数，比较任意两个数字的大小，返回最大值
function getMax1(a, b) {
    if (a == b) {
        return false;
    }
    else if (a > b)
    {
        return a;
    }
    else
    {
        return b;
    }

}

var res = getMax1(7,6);
console.log(res);