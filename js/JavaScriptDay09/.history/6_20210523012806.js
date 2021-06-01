//1-等待付款，2-等待发货，3-运输中，4-已签收，5-已取消，其他-无法追踪
function getStatus(n) {
    var status;
    switch (n)
    {
        case 1: 
            status = '等待付款';
            break;
        case 2:
            status = '等待发货';
            break;
        case 3:
            status = '运输中';
            break;
        case 4:
            status = '已签收';
            break;
        case 5:
            status = '已取消';
            break;
    }

}