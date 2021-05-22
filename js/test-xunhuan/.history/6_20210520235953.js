//让用户输入密码，判断是不是输入正确
var upwd = '123456';

whlie  (true) {
    var str =  prompt('请输入密码');
    //如果输入正确循环结束
    //如果输入不正确继续

    if(str === upwd){
        break;
    };
}