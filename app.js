// 1 step

for (i=1; i<10; i++){
    console.log(i);
}
console.log(i);

// 2 step

for (i=0; i<100; i++) {
    if (i %2 != 0) {
        console.log(i);
    }
}

console.log(i);

// 3 step

for (i=1; i<=9; i++) {
    console.log(`${i} * 7 = ${i*7}`);
}

console.log(`${i} * 7 = ${i*7}`);

// 4 step

for (i = 1; i<=10; i++){
    for(j = 1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

console.log(`${i} * ${j} = ${i*j}`);

// 5 step

// first way:
let sum=0;
for (i=1; i<= 10; i++) {
    sum= sum + i;
}

console.log(sum);

// seconde way:
let sum = 0;
for (i = 0; i <= 9; i++, sum += i);
console.log(sum);

// 6 step

function fact(n) {
    let total = 1;
    for (i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
}
console.log(fact(10));

// 7 step
function oddSum() {
    let sum = 0;
    for (let i = 11; i <= 30; i += 2) {
      sum += i;
    }
    return sum;
  }
  console.log(oddSum());

// 8 step
// One way:
const array = [190, 58, 20, 75];
function getArraySum(array){
    let total=0;
    for(const i in array) { 
        total += array[i];
    }
    return total;
}
console.log(getArraySum(array));

// Second way:
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
console.log(arrSum([190, 58,20,75]));

// 9 step

const arrayAverage = array => array.reduce((a, b) => a + b, 0) / array.length;
console.log(arrayAverage([17, 20, 100, 57]));

// 10 step
const array = [100, -70, 90, -2, 24, 14, -65];
const getPositiveValues = (array) =>array.filter(i => i>0);
const positiveValues = getPositiveValues(array);
console.log(positiveValues);

// 11 step
const array = [100, 67, 1, 66666, 78];
const maxNumber = array.reduce((a, b) => {return Math.max(a, b)});
console.log(maxNumber);

// 12 step

function isNumberPrime(number) {
    if (number === 0 || number === 1){
        return false;}
    else if (number === 2){
        return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (isNumberPrime) {
            if(number %i === 0){
                isNumberPrime = false;
            } else {
                isNumberPrime = true;
            }
        }
    }
    return isNumberPrime;
}

console.log(isNumberPrime(9));

// 13 step

function digitSum(n){
    let numArray = n.toString().split('');
    let sum = numArray.reduce(function(a, b){
    return parseInt(a)+parseInt(b);
    }, 0);
    return sum;
}
console.log(digitSum(58341)); // why (5+8+3+4+1)=21 and not (2+1)=3?*/

// 14 step

let primeNumbers = [], n = 2;
do if (isPrime(n++)) primeNumbers.push(n - 1);
while ([primeNumbers].length < 100);
function isPrime(n) {
    let sqrtNumber = Math.sqrt(n);

    for (let i = 2; i <= sqrtNumber; i++)
        if (n % i === 0) return false;
    return true;
}
console.log(primeNumbers);

// 15 step
// first way:
function rotateArray(array){
    let arrayRotatet = array.shift();
    return arrayRotatet;

}
console.log(rotateArray([19, 20, 22, 24, 26]));*/

// seconde way:
const array = [19, 20, 22, 24, 26];
const rotateArray = array.shift();
console.log(array);

//16 step

const array = ['mere', 'pere', 'cirese', 'cartofi'];
const reversed = array.reverse();
console.log(array);

//17 step
// first way:
const arrayNumbers = [89, 90, 100, 400];
const arrayString = ['Vasile', 'Maria', 'Cornel', 'Cornelia'];

const arrayMerged = arrayNumbers.concat(arrayString);
console.log(arrayMerged);

// seconde way:
const arrayMerged = (arrayNumbers, arrayString) => arrayNumbers.concat(arrayString);
console.log(arrayMerged([89, 90, 100, 400], ['Vasile', 'Maria', 'Cornel', 'Cornelia']));

// 18 step

function newArray(arrayOne, arrayTwo) {
    const one = arrayOne.filter(i => !arrayTwo.includes(i));
    const two = arrayTwo.filter(i => !arrayOne.includes(i));
    return one.concat(two);
}
console.log(newArray([1, 6, 9, 20], [6, 9, 40]));

// 19 step

function getDistinctElements(array){
    let distinctArray = [];
    
    for(let i = 0; i < array.length; i++){
        if(!(distinctArray.includes(array[i]))) {
          distinctArray.push(array[i]);
        }
    }
    
    return distinctArray;
}
console.log(getDistinctElements([48, 90, 3, 5, 48, 100, 100, 3, 1003, 783, 48, 1003]));

// 20 step

const numberOfWord = string => string.split(' '). length;
console.log(numberOfWord('Create a function that will return the number of words in a text'));