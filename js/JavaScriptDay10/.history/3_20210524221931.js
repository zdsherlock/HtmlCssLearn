var n1 = Number('2');   // 2number
var n2 = Number('2abc');   //NaN number
var n3 = Number(undefined); //NaN number
var n4 = Number(null);
var n5 = Number(true);
var n6 = Number(false);


//转整形parseInt()
var p1 = parseInt(3.14);

var p3 = parseInt('3.14');
var p4 = parseInt('3.14abc');
var p5 = parseInt('abc3.14abc');
var p6 = parseInt(true);
console.log( p3, typeof p3);
console.log( p4, typeof p4);
console.log( p5, typeof p5);
console.log( p6, typeof p6);

//转浮点型parseFloat();
var f1 = parseFloat(3.14);

console.log(f1);