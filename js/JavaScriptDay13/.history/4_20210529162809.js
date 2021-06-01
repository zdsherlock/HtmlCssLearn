//break 和 continue
//打印 1-10 之间所有的整数， 不包含5

// for (var i = 1; i <= 10; i++) {

//     if (i === 5){
//         continue;
//     }
//     console.log(i);
// }

//练习1：打印1-100之间所有的整数，遇到能被3或者4整除的就跳过

// for (var i = 1; i <= 100; i++){

//     if (i%3 ===0 || i%4===0){
//         continue;
//     }

//     console.log(i);
// }

//练习2：打印2000-2100之间的前10个闰年

for (var year = 2000, count = 0; year <= 2100; year++){

    if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
        console.log(year);
    }
}