var n = 3;

switch(n) {
    case 1:
        console.log('北京');
        break;
    case 2:
        console.log('上海');
        break;
    case 3:
        console.log('海南');
        break;
    default:
        console.log('tedu');
}


//练习：声明变量保存成绩分数，
//80-100 优秀
//60-80 良好 
// 60以下 不及格
//不在 0-100之间打印'非法的成绩信息'

var score = 80;

switch(parseInt(score/10)){
    case 10:
        console.log('优秀');
        break;
    case 9:
        console.log('优秀');
        break;
    case 8:
        console.log('优秀');
        break; 
    case 7:
        console.log('良好');
        break;
    case 6:
        console.log('良好');
        break;

        
}