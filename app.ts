// Numbers, strings and booleans.

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

// Object types, array types, tuples, and enums.

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Christopher',
    age: 31,
    hobbies: ['Running', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}

// Uniion types, literal types, and type aliases.

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result: string | number;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('34', '31', 'as-number');
console.log(combinedStringAges);
    
const combinedNames = combine('James', 'Meagan', 'as-text');
console.log(combinedNames);

// Function return types.

function basicAdd(n1: number, n2: number) {
    return n1 + n2;
}

function basicPrintResult(num: number) {
    console.log('Result: ' + num);
}

// Function callbacks.

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

basicPrintResult(basicAdd(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = basicAdd;
// combineValues = basicPrintResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});

// The unknown type.

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

// The never type.

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
