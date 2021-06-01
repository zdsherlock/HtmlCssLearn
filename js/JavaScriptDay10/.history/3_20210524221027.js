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
console.log( p3, typeof p3);