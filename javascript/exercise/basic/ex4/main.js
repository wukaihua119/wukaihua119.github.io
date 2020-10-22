var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

var s = ( side1 + side2 + side3 ); 
var area = Math.sqrt( s * (( s-side1 ) * ( s-side2) * ( s-side3 ) )); 
console.log( area ); 