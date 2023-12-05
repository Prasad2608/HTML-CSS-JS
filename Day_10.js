// var a = 32;

// while(a <= 40){
//     a += 6;
// }
// console.log(a);         //44 


function validate(){

    u = document.getElementById("user").value;

    p = document.getElementById("pass").value;

    if(u == "jbk" && p == "123"){

        window.location.href = "login.html"
    }
    else{

        document.getElementById("errorMsg").innerText = "Invalid Username or Password!";
       
    }
}
