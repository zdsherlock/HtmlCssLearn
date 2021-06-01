//九九乘法表，


// for (var i = 1; i <= 9; i++){

//     for(var j =1, str=''; j <= i; j++){
//         str += i + '*' + j + '=' + (i * j) +' ';
        
//     }

//     console.log(str);
// }

//练习： 创建函数getSum() ,在函数题中封装计算1-100之间所有整数的和并打印及格过，调用多从

function getSum(){
    for(i = 1, sum = 0; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
}
getSum();
getSum();
getSum();