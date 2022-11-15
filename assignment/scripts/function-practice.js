console.log('***** Function Practice *****')
console.log('js');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello Cameron!!';
}

// Remember to call the function to test
console.log('Test - should say "Hello Cameron!!"', helloName());



// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  console.log('in addNumbers', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
}
  // return firstNumber + secondNumber;
console.log('running addNumbers: 2 & 5:', addNumbers(2, 5));
console.log('running addNumbers: 10 & 7:', addNumbers(10 ,7));
console.log('running addNumbers: 4 & 9:', addNumbers(4, 9));

// 4. Function to multiply three numbers & return the result
function multiplyThree(){
  console.log('in multiplyThree: 2, 8 & 9');
   answer = 2 * 8 * 9;
   return answer;
}
console.log('running mulitplyThree: 2, 8 and 9:', multiplyThree(2, 8, 9));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

//This one was tricky for me.
//I did a few rounds of other code I knew and could maybe make work (commented out below).
//I used that along with examples from above and I think I got it!!

function getLast(array) {
  if (array.length > 0) {
    return array[array.length-1];
  }
    return undefined;
}

console.log('animal array:', getLast(['horse', 'bird', 'dog']));
console.log('empty array:', getLast['']);

/*
colorArray = ['gold', 'black', 'white'];
function getLast(colorArray) {
  if(array.length === 0) {
    return undefined;
  }
    return colorArray.length;
 
}
console.log (getLast(colorArray));
*/

/*
//Code option for how to get the last item of an array

let animalArray = ['fish', 'dog', 'horse'];
console.log(animalArray);
console.log(animalArray.length);

let lastItem = animalArray[animalArray.length-1];
console.log(lastItem);
*/





// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for(let i=0; i<array.length; i++){
    if(value === array[i]) {
    return true;
  }
    return false;
}
}

console.log(find (2, [2, 4, 6, 8]));
console.log(find(3, [2, 4, 6, 8]));
console.log(find(5, [5, 10, 15, 20]));



/*
function isFirstLetter(letter, string) {
  if(letter === string[0]){
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );







/*
let numberArray = [2, 4, 6, 8];
for(let i=0; i<numberArray.length; i++) {
  console.log(numberArray[i]);
  if(numberArray[i]===6) {
    console.log('Match');
  }
}

function find(value, array) {
  for(let i=0; i<numberArray.length; i++){
    if(numberArray[i]===6){
      return true;
    }
      return false;
  }
}

console.log(find(2, [2, 4, 6, 8]));








function find(value, array) {
 for(value in array) {
  console.log(value[i]);
  if([i]===value);
    return true;
  }
    return false;
}
  console.log(find, (2, [2, 4, 6, 8]));




 /*
  for (i in array)
 if(array[i]===value){
    return true;
}
    return false;
}

console.log(find(2, [2, 4, 6, 8]));

console.log(array[i]);
for (i in array)


function find(value, array) {
for(let i=0; i++;){
  if(array[i] === value) {
    return true;
  }
    return false;
}
}

console.log(find(6, [2, 4 , 6, 8]));


/*
numberArray = [2, 4, 6, 8];
function find(value,array){
if (numberArray[i]===8){
  console.log('Match!');
}
}




/*let i = 0;
function find( value, array ){
  if (i === value; i++) {
    return true;
  }
    return false;
}

console.log('find value a', find(2, ['2', '4', '6', '8']));
*/








// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string[0]){
    return true;
  }
    return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );




// 9. Function to return the sum of all numbers in an array

/*
function sumAll( ) {
  let sum = 0;
  //LOOP TO ADD ITEMS
  return sum;

}

/*
let array = [5, 15, 45];
let sum = 0;
for(let value of array) {
  sum += value;
}
console.log(sum);
*/

function sumAll( ) {
  let sum = 0;
  for(let index = 0; index < sumAll.length; index++) {
    sum += sumAll[index];
  }
  return sum;
}

console.log(sumAll([5, 15, 45]));



/*function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}
*/


function sumAll( ) {
  for (let sum = 0; 0 < sumAll.length; sum++) {
  }
  return sum;
}
console.log(sumAll([0, 2, 4]));






// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

const array = [5, -7, 9, -11, 13];

function allPositive(array){
  let(i=0; i < array.length;  i++) {


  }

  return array;
}



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!