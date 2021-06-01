// var i = 30;

// while(i >= 21) {
//     console.log(i);
//     i--;
// }

// console.log(i);


//循环打印70， 65， 60， 55， 50
// var i = 70;

// while ( i >= 50){
//     console.log(i);
//     i -= 5;
// }

// console.log(i,'最后一次');

//打印1-100之间所有的偶数,通过if判断
// var i = 1;
// while (i <= 100) {
//     //是否为偶数
//     if ( i % 2 ===0 ){
//         console.log(i);
//     }
//     i++
// }

//打印1-100间所有整数的和

var i = 1;
var sum = i;
while ( i <= 100){
    sum += i;
    i++;
}
console.log(sum);
