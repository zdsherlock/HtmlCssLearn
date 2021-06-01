//弹出两次输入框分别输入商品单价和数量，计算出总价，如果总价满1000打九折
//假设卡内余额1200，如果足够支付，弹出警示框'pay success',  否则弹出警示框'pay error'

var price = prompt("请输入价格");
var num = prompt("请输入数量");
var sum = price * num;
var money = 1200;

if ( sum >= 1000){
    sum *= 0.9;
    if ( money >= sum){
        alert("pay success");
    }else {
        alert("pay error");
    }
    console.log(sum)
}