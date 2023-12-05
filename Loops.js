// If statments
function giveAccess(name){
    if(name == "Prasad"){
        return "HELLO";
    }
    else{
        return "Sorry";
    }
    
}
console.log(giveAccess("Prasad"));

// If Else If

function validate(name){

    if(name == "JBK" || name == "TKA"){
        
        console.log("Welcome");
    }
    else if(name == "velocity"){

        
        console.log("Welcome");
    }else{

        console.log("Bye Bye");
    }
}

validate("velocity");