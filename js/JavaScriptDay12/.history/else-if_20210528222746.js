// //1.等待付款 2.等待发货 3.运输中 4.已签收 5.已取消 其他 无法追踪

// var status = null;
// if(status === 1) {
//     console.log('等待付款');
// }else if(status ===2){
//     console.log('等待发货');
// }else if (status ===3){
//     console.log('运输中');
// }else if (status ===4){
//     console.log('已签收');
// }else if (status ===5){
//     console.log('已取消');
// }else {
//     console.log('无法追踪');
// }

//练习：声明变量保存成绩分数
// 80-100 优秀
// 60-80 良好
// 60以下 不及格
// 不在0-100之间 打印'非法的成绩信息'

var score = 111;

if (score > 100 || score < 0){
    console.log('非法的成绩信息');
}else if (  score>=80){
    console.log('优秀');
}else if( score >= 60) {
    console.log('良好');
}else if (score < 60) {
    console.log('不及格');
}