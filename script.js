let celcius = 10;
let fahrenheit = celcius * 1.8 + 32;
console.log(fahrenheit);

let cash = 50;
let price = 40;
let difference = cash - price;
let isStoreOpen = true;

if (difference > 0) {
    console.log("you paid extra, here's " + difference + " dollars change");
}
else if (difference === 0) {
    console.log("you paid the exact amount, have a nice day");
}
else {
    console.log("not enough money, you still owe " + -difference + " dollars");
}

difference >= 0 && isStoreOpen ? console.log("give receipt") : console.log("do not give receipt");

for (i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Frontend Simplified");
    } else if (i % 3 === 0) {
        console.log("Frontend");
    } else if (i % 5 === 0) {
        console.log("Simplified");
    } else {
        console.log(i);
    }
}

let string = "Frontend Simplified"

for (i = 0; i < string.length; i++) {
    console.log(string[i]);
}

function convertCToF(cNum) {
    return cNum * 1.8 + 32;
}

console.log(convertCToF(30));

const convertFToC = (fNum) => {
    return (fNum - 32) / 1.8;
}

console.log(convertFToC(86));

let arr = [10, 20, 30, 40, 50];

console.log(arr[arr.length - 1]);

arr.push(60);

console.log(arr[arr.length - 1]);

let newArr = arr.filter((element) => {
    return element % 3 === 0;
})

console.log(newArr);

let grades = ["A+", "A", "Fail"];

let goodGrades = grades.filter(element1 => element1 !== "Fail");

console.log(goodGrades);

let greatGrades = [];

for (i = 0; i < grades.length; i++) {
    if (grades[i] !== "Fail") {
        greatGrades.push(grades[i]);
    }
}

console.log(greatGrades);

let dollars = [1, 5, 10, 3];

let cents = dollars.map(element => element * 100);

console.log(cents);

cents = [];

for (i = 0; i < dollars.length; i++) {
    cents.push(dollars[i] * 100);
}

console.log(cents);

let users = [
    {
        username: "BWhit01",
        password: "mypassword",
        email: "bmwhitaker01@gmail.com",
        subscriptionStatus: "Pro",
        discordId: "BWhit_01",
        lessonsCompleted: [1, 2, 3]
    }
]

function register(username, password, email, subscriptionStatus, discordId, lessonsCompleted) {
    let newUser = { username: username, password: password, email: email, subscriptionStatus: subscriptionStatus, discordId: discordId, lessonsCompleted: lessonsCompleted }
    users.push(newUser)
}

register("myusername", "mypassword", "myemail", "VIP", "mydiscord", [1, 2, 3, 4]);

console.log(users);

// document.querySelector("#title").innerHTML = "New Name";

// console.log(document.getElementById("title"));

function changeTitleToPurple() {
    document.querySelector("#title").style.color = "purple"
}