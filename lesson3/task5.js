/**
 * Created by Alina on 21.11.2015.
 */
"use strict";
var string = "";
var width = 8;
var height = 8;
for(var i = 1; i <= height; i++){
    for (var j = 1; j <= width; j++){
        if(j%2 == i%2){
            string += "#";
        } else {
            string += "\t";
        }
    }
    string += "\n";
}

alert(string);
