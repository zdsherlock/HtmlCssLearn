//循环打印1-10之间所有的整数
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

//打印1-100之间所有能被3整除的数

// for (var i = 1; i<=100; i++){
//     if (i%3 ===0){
//         console.log(i);
//     }
// }

//打印1-100之间所有能被7整除的数值的和

for ( var i = 1,sum = 0; i <=100; i++){
    if(i%7 ===0){
        console.log(i);
        sum +=i;
    }
}
console.log(sum);