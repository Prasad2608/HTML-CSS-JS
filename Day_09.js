a = "Hello js";
console.log(a)

function validate (name , age){

    console.log("Name = " + name + " , Age = " +age);
}

validate("Prasad" , 21);    

for(i = 1 ; i <= 5 ; i++){

    console.log("Simple For-Loop");
}

furits = ["Apple" , "Mango" , "Banana" , "Orange" , "Watermelon"];

for(var frt in furits){     //Follows Index 

    let f = document.getElementById("idfrt");

    let l = document.createElement("li");

    l.textContent = furits[frt];  //call variable name as well as index

    f.appendChild(l);


    console.log(furits[frt]);
}

Cities = ["Nashik" , "Pune" , "Mumbai" , "Nagpur" , "Shirdi"];

for( var city of Cities){     //Follows Values

    let f = document.getElementById("idcity");

    let l = document.createElement("li");

    l.textContent = city;   //Call Variable name

    f.appendChild(l);


    console.log(city);

}