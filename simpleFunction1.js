//Examples of simple functions 
//
//

function speak(xyz){
    console.log(xyz);
}
speak("Hey it's me");

function walk(cde){
    console.log("You took " + cde + " steps");
    }
walk(30);
function secret( g){
    if (g=="  "){
        console.log("How did you know?");
    }
    else if (typeof(g) == typeof("") ){
        console.log("I can't tell you that!!");
    }
}

secret("I lost my Keys");

function specs(x,y,z){
    if(y > x && z < x){
    var message = y + " is greater";    
        console.log(message);
           }
    else if (x>y || y>z){
        console.log("who Cares");         
    }
    else if (z != x||y){
        console.log(z + " is not equal to the others")
}
var trash = x + y + z;
if (trash > y){
    console.log(trash);
}
}
specs(5, 8, 3)
specs(7, 9, 2)
specs(9, 2, 1)