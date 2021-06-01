//传递匿名函数为实参

function fn(a){
    a();
}

fn(function(){
    console.log('hello');
    console.log('world');
});

