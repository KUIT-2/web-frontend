const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr2 = arr.map((value, index) => {
    return value * 2;
});
console.log(arr2);

const arr3 = arr.filter((value) => {
    return value >= 0;
});
console.log(arr3);

const arr4 = arr.reduce((prevValue, currvalue) => {
    return prevValue + currvalue;
});
const arr5 = arr.reduce((prevValue, currvalue) => {
    // console.log(prevValue, currvalue);
    return prevValue + currvalue;
}, 10);
console.log(arr4);
console.log(arr5); 