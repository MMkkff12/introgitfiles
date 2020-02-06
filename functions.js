function printConsole(user){
    var name = user;
    console.log(name + " created this function!");
    //! delete this line document.write(name);
    document.getElementById("nameOutput").innerHTML = name;
}


function phone( type, batteryLife, os, memory){
var status = "Your " + os + type + " Phone has " + memory +   "gb  memory left.  It only has " + batteryLife + "%  battery left."

document.write(status);
document.getElementById("phoneOutput").innerHTML = status;
return staus;
}

function main(name, age){


var message;    
var user = name;
    if(age < 10){
        message = user + " your just a kid "
    }
    else if(age < 20){
        message = user + " YOU'RE NO OLDER THAN THE LAST kid"
    }
    else if(age >= 20){
        message = user + " We don't have to say it - you're Not a kid"
    }
    else {message = " enter a number please"
    }
    console.log(message);
    //! delete this element  document.write (message);
    document.getElementById("statusOutput").innerHTML = message;
}


    