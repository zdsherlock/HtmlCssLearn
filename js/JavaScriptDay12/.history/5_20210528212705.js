//闰年练习：能被4整除，并且不能被100整除，或者能被400整除;

var year = 2020;

if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
    console.log(year);
}