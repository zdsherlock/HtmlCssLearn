var price, num,total,money = 800;
price=prompt('请输入商品的价格');
num = prompt('请输入商品的数量');

total = price*num;

if(total>= 500) {
    total*= 0.9;
}

console.log(total);

if(money>=total){
    alert('支付成功');
    console.log('当前余额为'+(money-total));
}else {
    alert('余额不足');
}
