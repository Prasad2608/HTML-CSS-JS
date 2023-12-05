
let a = 5;
let b = 10;
let c = "I am ";

a = a + 1;
b = b + 5;
c = c + "String";

console.log(a);
console.log(b);
console.log(c);

//Besic Maths
let sum = 10 + 20;
let sub = 55 - 34;
let mul = 10 * 20;
let div = 66 / 33;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

//Increment & Decrement
let inc = 10;
inc++;
console.log(inc);

let dec = 10;
dec--;
console.log(dec);

//quotes
let myString = "I am a \"double quoted \"string"
console.log(myString);

// Constructing strings with variable
let myName = "Prasad";
let myStr = "Hello , I am " + myName + ", How are you!"
console.log(myStr);

// Appending/Attaching variables to string
let firstName = "Prasad ";
let lastName = " Tamhankar";
let fullName = firstName += lastName;
console.log(fullName);

// To find Length of String
let str = "Prasad Tamhankar";
console.log(str.length);

// To Access Multidimentional Arrays
let myArray = [[2 , 4 , 1] , [7 , 1 , 2] , [5 , 3 , 2 ] , [[2 , 1 , 4] , 13 , 14]];
let showArray = myArray[2][0];
console.log(showArray);

// Adding elements using PUSH function
let myArray1 = ["Prasad"];
myArray1.push("Tamhankar");
console.log(myArray1);

// Removing elements using POP function
let myArray2 = ["Prasad" , "Tamhankar"];
removeArray = myArray2.pop();     //pop() will remove the last element in the index ,
console.log(myArray2);            //  Alternativly we can use shift() function , it will remove first element from index

// Arguments/ Function
function doAddition(a , b){
    console.log(a + b);
}
doAddition(10 , 10);

// Returns a value from a function
function timesFive(num){
    return num * 5;
}
console.log(timesFive(10));



                                   


