//练习：创建函数isPrime, 传递任意一个数字，检测是否为素数，返回布尔型的值
//素数：除了1和自身以外不能被其他的数字整除

function isPrime(n){
    if(n===1){
        return false;
    }
    for (var i=2; i<n; i++){
        if(n%i ===0){
            return false;
        }
    }
    return true;
}
var res = isPrime();
console.log(res);