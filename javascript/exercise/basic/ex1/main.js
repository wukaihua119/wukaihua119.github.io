var today = new Date(); 

var day = today.getDay(); 
var daylist = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]; 
console.log( "Today is: " + daylist[day] ); 

var hours = today.getHours(); 
var mins = today.getMinutes(); 
var seconds = today.getSeconds(); 
var day_night = ( hours >= 12 ) ? " PM" : " AM"; 

hours = ( hours >= 12 ) ? (hours - 12) : hours; 

console.log( "Current Time: " + hours + day_night + " : " + mins + " : " + seconds ); 



