function fn(a) {
    //a=function(){}
    //a就是一个函数名称，保存的是传递的匿名函数
    a();
}

fn(function(){
    console.log('hello');
    console.log('world');
});