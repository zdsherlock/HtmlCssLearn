//强制转换
//Number();

var n1 = Number('2'); // 2 number
var n2 = Number('2abc'); // NaN number
var n3 = Number(undefined); //NaN number
var n4 = Number(null); //0 number
var n5 = Number(true); // 1 number
var n6 = Number(false); //0 number

//转整型 parseInt();
var p1 = parseInt(3.14); //3 number
var p2 = parseInt('3.14'); //3 number
var p3 = parseInt('3.14abc'); //3 number
var p4 = parseInt('abc3.14'); // NaN number
var p5 = parseInt(true); // NN number

//转浮点型 parseFlat();
var f1 = parseFloat('3.14'); //3.14 number
var f2 = parseFloat('3.14a'); //3.14number
var f3 = parseFloat('a3.14'); //NaN number

// 转字符串 toStrting();
var t = 2;
var str = t.toString();
console.log()