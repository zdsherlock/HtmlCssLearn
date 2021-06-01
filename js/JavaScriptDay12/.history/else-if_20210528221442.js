//1.等待付款 2.等待发货 3.运输中 4.已签收 5.已取消 其他 无法追踪

var status = null;
if(status === 1) {
    console.log('等待付款');
}else if(status ===2){
    console.log('等待发货');
}else if (status ===3){
    console.log('运输中');
}else if (status ===4){
    console.log('已签收')
}