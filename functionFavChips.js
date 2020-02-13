// This function is to show array names can be anything.
// use them to mine data in anyway needed from the array.


function favChips(x){
    for (var i = 0; i < x.length; i++){
        if (x[i].length > 6 ) {
            console.log ( x[i]);
        }
        else {
            console.log("Found some bad chips @ " +i);
        }
    }
}

var shelf = ["Cheetos", "Fritos", "Lays", "Doritos", "Pringles", "Buglels", "Takis", "Sea Salt and Vinager"]
favChips(shelf);