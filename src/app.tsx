// Type inference

let ertek = "teszt"
let ertek2: number = Math.random();

console.log(ertek2);


// Functions

const hello_1 = "hello";

function forExample(input: string): number { // number redundáns info!
  return input.length
}

console.log(forExample(hello_1));

//Union type

const hello_2: number | string = "Hello 2"

function forExample_2(input: number | string) {
  if (typeof input === "string") {
    return input.length;
  }
  return input
}

console.log(forExample_2(hello_2))

// Literal type, type alias

let literalNums: 1 | 42 | 3.2 = 1

//Type alias

const value: Numbers = 42.5
console.log(value);


type Numbers = 2 | 4 | 42.5;

function aliasForExample(input: Numbers): Numbers {
  return 42.5
}


type Status = "Prepared" | "InpRocess" | "Done"
let progress: Status;

progress = "Prepared"
progress = "InpRocess"


// Arrays;

let onlyNumberOfArray: number[] = []; // | let onlyNumberOfArray: Array<number>= [];
onlyNumberOfArray.push(20);

// Tuple
type Person = [name: string, age: number]

let person: Person = ["Szaniszló Árpád", 29]

const [fullName, age] = person;

console.log(fullName, person);



