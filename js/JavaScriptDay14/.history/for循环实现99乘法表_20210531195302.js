//九九乘法表，


for (var i = 1; i <= 0; i++){

    for(var j =1, str=''; j <= i; j++){
        str += i + '*' + j + '=' + (i * j) + '';
        
    }

    console.log(str);
}