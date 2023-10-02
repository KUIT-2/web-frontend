const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr2 = arr.map((value, index) => {
    console.log(value, index);
    return value;
})

const arr3 = arr.map((value, index) => {
    return value*2;
})
console.log(arr3);

const arr4 = arr.filter((value) => {
    return value > 0;
})
console.log(arr4);

const arr5 = arr.reduce((prevValue, currValue) => {
    console.log(prevValue, currValue);
    return prevValue + currValue;
}, 10);
console.log(arr5);