//循环嵌套
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

//外层：控制循环行数
for(var  j = 1; j <=9; j++) {
    //内层：控制每一行循环的列数
    for(var i = 1, str = ''; i <= j; i++){
        str += '*';
    }
    console.log(str);
}


//作业： 九九乘法表,
// 1*1 = 1;
// 1*2 = 2; 2*2 = 4;
// 1*3 = 3; 2*3 = 6;
// 1*3 = 3; 2*3 = 6; 3 * 3 = 9;