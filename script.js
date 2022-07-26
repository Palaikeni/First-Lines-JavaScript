function isLoggedAndSubbed(log, sub) {
    return log === "Logged_In" && sub === "Subscribed" ? true : false;
}

console.log(isLoggedAndSubbed("Logged_In", "Subscribed"));

function filterOut(num1, num2) {
    return !!num1 == false ? num1 : num2;
}

console.log (filterOut("", 200));

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.length);

function sumOfArray(array) {
    let sum = null;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

sumOfArray(arr);

function progressiveSum(num) {
    let sum1 = null;
    for (i = 1; i <= num; i++) {
        sum1 += i;
    }
    return sum1;
}

console.log(progressiveSum(600));

function getMax(array) {
    let max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax(arr));

function reverseString(str) {
    let length = str.length;
    let newStr = "";
    for (i = 0; i < length; i++) {
        newStr += str[(length - 1) - i];
    }
    return newStr;
}

console.log(reverseString("Brayden"))
console.log("Brayden".split("").reverse().join(""));

function convertToZeros(array) {
    let newArr = [];
    for (i = 0; i < array.length; i++) {
        newArr.push(0);
    }
    return newArr;
}

console.log(convertToZeros(arr));
console.log(arr.map(elem => 0));

let arr1 = ["Apple", "Banana", "Apple", "Orange"];

function removeApples(array) {
    let newArr = array.filter(elem => elem !== "Apple");
    return newArr;
}

console.log(removeApples(arr1));

let arr2 = [500, 0, "Brayden", "", []];

function convertToBoolean(array) {
    let newArr = [];
    for (i = 0; i < array.length; i++) {
        newArr.push(!!array[i]);
    }
    return newArr;
}

console.log(convertToBoolean(arr2));
console.log(arr2.map(elem => !!elem));

let arr3 = [40, 20, -90, -50, 0, 100];

function sortLowToHigh(arr) {
    return arr.sort((a,b) => (a-b))
}
    
console.log(sortLowToHigh(arr3));

async function postsbyUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();
    const posts = result.filter(elem => elem.userId === userId);
    console.log(posts);
}

postsbyUser(5);

async function firstSix() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const posts = result.filter(elem => !elem.completed).slice(0, 6);
    console.log(posts);
}

firstSix();