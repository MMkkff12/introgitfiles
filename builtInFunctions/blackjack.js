// given 2 INT values greater than 0,
// return whichever value is nearest to 21 without going over
// return 0 if they both go over,
var w = 19;
var x = 21;
var y = 19;
var z = 23;

function blackjack(a, b){
    if ((a <= 21) && (b <= 21)){
    console.log(Math.max(a,b));
    }
    else if ((a > 21) && (b <= 21)){  
        console.log(b);
        }
    else if ((a <= 21) && (b > 21)){  
            console.log(a);
            }
    else {
    console.log(0);
    }}
blackjack(w,y);
blackjack(x,w);
blackjack(y,z);
blackjack(z,z);
