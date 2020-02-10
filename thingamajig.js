function clunk(times){
    var num = times;
    while (num > 0) {
        display ("clunk");
        num = num - 1;
    }
}
function thingamajig (size){
    var facky =1;
    clunkcounter = 0;
    if (size == 0){
        console.log("clank");
     }
    else if (size == 1){
        console.log("thunk");
    } else {
        while (size > 1){
            facky = facky * size;
            size = size - 1
        }
        clunk (facky);
    }
}
function display(output) {
    console.log (output);
    clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0
thingamajig(8);
console.log(clunkCounter);