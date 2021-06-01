//var的变量提升
var a = 1;

function test(){

    console.log(a);

    var a = 2;
}

test();