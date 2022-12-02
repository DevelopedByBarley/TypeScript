"use strict";
// Type inference
let ertek = "teszt";
let ertek2 = Math.random();
console.log(ertek2);
// Functions
const hello_1 = "hello";
function forExample(input) {
    return input.length;
}
console.log(forExample(hello_1));
//Union type
const hello_2 = "Hello 2";
function forExample_2(input) {
    if (typeof input === "string") {
        return input.length;
    }
    return input;
}
console.log(forExample_2(hello_2));
// Literal type, type alias
let literalNums = 1;
//Type alias
const value = 42.5;
console.log(value);
function aliasForExample(input) {
    return 42.5;
}
let progress;
progress = "Prepared";
progress = "InpRocess";
// Arrays;
let onlyNumberOfArray = []; // | let onlyNumberOfArray: Array<number>= [];
onlyNumberOfArray.push(20);
let person = ["Szaniszló Árpád", 29];
const [fullName, age] = person;
console.log(fullName, person);
let album = {
    userId: 1,
    id: 1,
    title: "Quidem molestia enim",
    photos: [{
            id: 10,
            title: "Photo title",
            url: "Photo Url",
            thumnailUrl: "Photo thumnailUrl"
        }]
};
console.log(album);
let album2 = {
    userId: 2,
    id: 3,
    title: "Hello",
    numberOfUnitsSold: 3
};
