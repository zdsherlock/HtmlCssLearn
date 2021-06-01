function getStatus(n){
    switch(n){
        case 1:
            return '等待付款'
        case 2:
            return '等待发货'
        case 3:
            return '运输中'
        case 4:
            return '已签收'
        case 5:
            return '已取消'
    }
}

var res = getMax2(7, 5, 3);
console.log(res);