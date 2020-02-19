// Created a String Variable
var a, b,c,d,e,f,g;
a = "mark farrell";
b = "  someCar   ";
c = "someHouse";
// length returns the length of the string and applys an index of 0 to ...
console.log(a.length); // 12
console.log(a.charAt(11)); // l
// returns last charater
console.log(a.charAt(a.length - 1)); // l
console.log(c.charAt(c.length - 1)); // e
console.log(a.concat(b)); // mark farrellsomecar
console.log(a.concat(b).concat(c).concat(a).concat(d).charAt(25)); // adds all together but only returns Char at 25 of string created
console.log(a + b);  // mark farrellsomecar
console.log(a.endsWith("al")); // returns false
console.log(a.endsWith("ll")); // returns true
console.log(a.includes("b"));  // returns false
console.log(a.includes("ark"));  // returns true
console.log(a.indexOf("b"));  // returns -1 numerical value of not there
console.log(a.indexOf("e"));   // returns 9
console.log(a.lastIndexOf("r")); //  returns 8 
console.log(b.toLocaleLowerCase()); // returns somecar all lower case
console.log(a.toLocaleUpperCase());  // returns MARK FARRELL
console.log(a.repeat(5));  // returns mark farrellmark farrellmark farrellmark farrellmark farrell
// splits string into an array-- no space in quotes splits every letter
e =a.split(" ");
console.log(e);  // returns [ 'mark', 'farrell']
console.log(a.startsWith("e"));  // returns false
console.log(a.startsWith("m"));  // returns true
console.log(a.startsWith("M"));  // returns false
console.log(a.substr(1,6));  // returns "ark fa" 1st number is index# then #s to include
console.log(a.substring(1,6));  // returns "ark f" excludes last index number
console.log(b.trim());// returns s"someCar"  removes white space
console.log(b.replace(" ","<<")); // returns << someCar only first occurance of set character
console.log(b.search("Car"));// returns 6 = index position of where it starts









