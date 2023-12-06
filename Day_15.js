function validateEmail(){

    var e = document.getElementById("email").value ; 

    var emailRegex = /^\S+@\S+\.\S+$/.test(e);

    if(!emailRegex){

        document.getElementById("msg").innerHTML = "Enter Valid Email" ; 
    }else{
        document.getElementById("msg").innerHTML = "Login Succes" ; 
    }
}
