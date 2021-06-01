//传递匿名函数为实参

function fn(a){
    a();
}

fn(functioin(){
    console.log('hello');
    console.log('world');
});

