
var a = 10; // = is assignment operator (Assigned to(=)).
let b = "Hello"
let c = 3
let e = "3"
let d = true
const pi = 3.14 //we can never change const.

console.log(a)
console.log(b)
console.log(c === e) // to strictly check values (everything including variable name) with respect to datatype 
console.log(c==e) // To check only values
console.log(typeof e , typeof c , typeof d) // To  check data types of variable / Identifier(typeof).


function validate (name){             //To create function
    
    if(name == "JBK"){
        console.log("Welcome to TKA") //To add validation
    }
    else{
        console.log("Not Eligible")
    }
    

}
validate("JBK")    // To call function



 var x = "js";
function pointgvar(){
   
    
    let x= "ts";
    console.log(x);
    console.log(window.x);
   
}
pointgvar();

