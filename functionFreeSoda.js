// This function is just to show that your name in a function is just for a parameter!!
// You can pass any array into it.  Flavors could be called "any array"  
// When you call the function with a different name it has to be an array in this function!!

function freeSoda(flavors){
    for( var i = 0; i < flavors.length; i++){
        console.log(flavors[i]);
    }
}
var sodaTypes = ["orange", "grape", "strawberry", "peach", "lemon lime"];

    freeSoda(sodaTypes);