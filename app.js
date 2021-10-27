// Character Generator Functions 

function randomIndex(str){
    return Math.floor(Math.random()*str.length);
}
// Example of the randomIndex function
console.log(randomIndex(`chicken`)); //0,1,2,3,4,5,6

// Function that returns a random lowercase letter using a random index in the "letters" string
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`; 
    //returning a random letter using a random index in the "letters" string  
    return letters [randomIndex()]; 
}
console.log(getRandomLower()); 

// function that returns a random uppercase letter
function getRandomUpper(){
    // running the get random lower function to create a random letter and setting that value to the letter variable 
    const letter = getRandomLower(); 
    // changes the random letter to uppercase
    return letter.toLocaleUpperCase(); 
}
console.log(getRandomUpper);

// function that returns a random number 
function getRandomNumber(){
    const numbers = `123456789`;
    // Returning a random number using a random index in the "numbers" string
    return numbers [randomIndex(numbers)]; 
}
console.log(getRandomNumber()); 

function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    return symbols [randomIndex(symbols)]; 
}
// Example of the getRandomSymbol function
console.log(getRandomSymbol());

// Object to store all the character generator function. 
const randomFunctions = {
    lower:getRandomLower, 
    upper:getRandomUpper, 
    number:getRandomNumber, 
    symbol:getRandomSymbol
}; 

// Selecting the DOM Elements 
const resultEl = document.querySelector(`#result`); 
const lowercaseEl = document.querySelector(`#lowercase`); 
const uppercaseEl = document.querySelector(`#uppercase`); 
const numberEl = document.querySelector(`#numbers`); 
const lengthEl = document.querySelector(`#symbols`); 
const generateEl = document.querySelector(`#length`); 
const clipboardEl = document.querySelector(`#generate`); 


// Function that accepts true or false values as well as a number as arguments 
// 
function generatePassword(lower, upper, number, symbol, length){

    console.log(lower, upper, number, symbol, length);

// 1. CREATE THE PASSWORD VARIABLE
let generatePassword =``; 

// 2. FILTER OUT UNCHECKED OPTIONS 
// True and false values can be added together (True = 1, False = 0)
// NOTE: The value set to typesCount will be used when building the password
const typesCount = lower + upper + number + symbol; 
console.log(typesCount);

// If the user has not selected any options, the display alert is displayed and an empty string is returned. 
if (typesCount === 0){
    alert(`Please select at least one option`); 
    // The return keyword stops/ends the execution of a function (AKA does not run any of the code on the lines that follow the `return` in the function)
    return ``; 
}

// creating an array of arrays. The first item in each nested array hold the valie of a string that each will be used to access a function in the randomFunctions object. Also, the second item in each nested array is one of the values passed into this generatePassword function. 
let typesArr = [
    [`lower`, lower], 
    [`upper`, upper], 
    [`number`, number], 
    [`symbol`, symbol]
]

// The filter method creates a new array with all the items that pass the test implemented by the provided function (AKA all the items that cause the function to return a boolean value of tre when the function is run using the item as an arguments for the item parameter in this example. 
// Checking if the value for index of 1 in each item in the array

typesArr.filter(item=> {
    console.log(item[1]); 
    return item[1];
})
console.log(`typesArr:`, typesArr);

// 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
// Building password with a for loop 
// NOTE: The value for length is the value selected in the length input. 
for (i=0; i<length; i+= typesCount){
// One of the items in the updated/filtered version of the typesArr will be the same value/argument passing into for the type parameter each time the anonymous arrow function is run/executed. 
typesArr.forEach(type=> {
const funcName = type[0]; 
console.log(funcName);
// Accessing and running/executing a function in the randomFunctions object. Adding the value returned from the accessed function to the generatedPassword string variable. 
generatePassword += randomFunctions[funcName]();
console.log(generatedPassword);
});

}
// 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION 
// removing extra characters if necessary (the above loop will create a password that may not match the length selected if that length is not a multiple of the options/checkboxes selected)
const finalPassword = generatedPassword.slice(0,length);
console.log(finalPassword);
return finalPassword;

}



