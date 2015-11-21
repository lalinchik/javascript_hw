/**
 * Created by Alina on 21.11.2015.
 */
var max = 100;
for(var i = 1; i <= 100; i++){
    if(i%5 == 0 && i%3 !== 0){
        console.log("Buzz");
    } else if(i%3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}