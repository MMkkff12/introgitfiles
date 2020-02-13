


var bookshelf=[true, 372, "Works", 92.94, 3e5];
var out;
var oldRecord=["1", 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sounds(score){
    for (var i=0; i< score.length; i++){
        console.log(score[i]);
        if (score[i] != true){
         out += score[i];
        }else {
            console.log("I'm true");
        }
    }
    if (score.length >= 6){
            score.push(out);
            console.log(out);
        
 //       sounds(score);}
    }
}

sounds(bookshelf);
sounds(oldRecord);