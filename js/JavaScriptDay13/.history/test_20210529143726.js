//练习：声明变量保存银行卡的密码，死循环弹出提示框，要求用户输入密码 
//如果密码输入正确弹出'login success',并强制结束循环
//如果输入密码超过3次，弹出警示框'login err', 强制结束循环

var uname = 'abc';
var password = '123456';
var i = 0;
do {
    var inputPassword = prompt('input password');
    if (inputPassword === password){
        alert('login success');
        break;
    }

    i++

    if (i ===3){
        alert('login err');
        break;
    }
}while(true);