function getStatus(n){
    switch(n){
        case 1:
            return '等待付款'
        case 2:
            return '等待发货'
    }
}

var res = getMax2(7, 5, 3);
console.log(res);