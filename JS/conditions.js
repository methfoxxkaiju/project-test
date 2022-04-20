"use strict";
function copy(mainObject) {
    let objCopy = {};

    for (let key in mainObject) {
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c: {
        x:2,
        y:3
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);