// var n1 = Number('2');   // 2number
// var n2 = Number('2abc');   //NaN number
// var n3 = Number(undefined); //NaN number
// var n4 = Number(null);
// var n5 = Number(true);
// var n6 = Number(false);


// //转整形parseInt()
// var p1 = parseInt(3.14);

// var p3 = parseInt('3.14');
// var p4 = parseInt('3.14abc');
// var p5 = parseInt('abc3.14abc');
// var p6 = parseInt(true);
// console.log( p3, typeof p3);
// console.log( p4, typeof p4);
// console.log( p5, typeof p5);
// console.log( p6, typeof p6);

//转浮点型parseFloat();
// var f1 = parseFloat(3.14);
// var f2 = parseFloat('3.14');
// var f3 = parseFloat('3.14a')
// var f4 = parseFloat('a3.14')
// console.log(f1, typeof f1);
// console.log(f2, typeof f2);
// console.log(f3, typeof f3);
// console.log(f4, typeof f4);

//转字符串 toString();
var t = 2;
var str = t.toString;

console.log(t, typeof t);
console.log(str, typeof str);