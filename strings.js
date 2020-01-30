function help(){
document.getElementById("demo").innerHTML = "Thanks for Helping Me"
alert("Thank You For Saving My Life, A Shark Was Going To Eat All of Us Alive !!!!!")

}

function dontHelp(){
    document.getElementById("demo").innerHTML = "Why Won't You Help Me"
    alert("Five People Were Eaten By A Baby Shark and Mama Shark Watched It All !!!!!")

}

function entname(){
    var  enteredName = document.getElementById("nameentered").value;  
    document.getElementById("name").innerHTML = enteredName;
} 