//传递匿名函数为实参

function fn(a){
    //a = function(){}
    //a就是函数名称，报错是传递的匿名函数
    a();
}

fn(function(){
    console.log('hello');
    console.log('world');
});

