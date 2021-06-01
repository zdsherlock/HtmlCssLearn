// var i = 1;
// //do...while
// //循环打印1-10之间所有的整数

// do {
//     //循环体
//     console.log(i);
//     i++;
// }while(i<=10);

//练习：使用循环打印1-100之间所有的奇数

var i = 1;
do {
    //循环体
    if (i%2 === 1){
        console.log(i);
    }
    i++;
}while(i <=100);

//练习：使用循环打印1-100之间所有的奇数的和

var i = 1;
do {
    if(i%2 === 1){
        console.log(i);
    }
}