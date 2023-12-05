

// var a = confirm("ok");
// console.log(a);

// if(a == true){
//     window.location.href = "Day_10.html";
// }
// else{
//     document.querySelector("#msg").innerHTML = "Cannot continue"
// }





// var p = prompt("Enter Name");
// document.querySelector("#msg").innerHTML = p;
// console.log(p);





var p = prompt("Enter Day");
switch(p.toLowerCase() || p.toUpperCase()){
    case "monday":
        console.log("Week Start");
        document.querySelector("#msg").innerHTML = "Week Start"
        break;

    case "tuesday":
        console.log("It is 2nd day of week");
        document.querySelector("#msg").innerHTML = "It is 2nd day of week";
        break;

    case "wednesday":
        console.log("It s 3rd day of week");
        document.querySelector("#msg").innerHTML = "It is 3rd day of week";
        break;

    case "thrusday":
        console.log("It is 4th day of week");
        document.querySelector("#msg").innerHTML = "It is 4th day of week";
        break;

    case "friday":
        console.log("It is 5th day of week");
        document.querySelector("#msg").innerHTML = "It is 5th day of week";
        break;

    case "saturday":
        console.log("It is 6th day of week");
        document.querySelector("#msg").innerHTML = "It is 6th day of week";
        break;

    case "sunday":
        console.log("Week end");
        document.querySelector("#msg").innerHTML = "Week end";
        break;
                            
        default:
            console.log("Plz enter valid day");
            document.querySelector("#msg").innerHTML ="Plz enter valid day"
    

}
document.querySelector("#day").innerHTML = p

// for(i = 0 ; i < 5 ; i++){

//     if(i == 2){
//         break;
//     }
//     else{
//         console.log(i);

//     }

// }

