//  Write a program that takes two Number Arrays as input,
//  Then Compares both arrays against one another to
//  find common values and places them into a New Array

compare();
function compare(){
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var y = [1, 3, 5, 7, 9, 3, 3, 3, 3];
    var z = [ ] 
        for (var i=0; i< x.length; i++){
            for (var j=0; j<y.length; j++){
       
            if (x[i] == y[j]) {
                z[z.length]= x[i];
    

        }
    
    }}
    console.log(z);
}
