"use strict";

function bestEmployee(obj){
    var max = 0;
    var employee;

    for(var key in obj){
        if(obj[key] > max){
            max = obj[key];
            employee = key;
        }
    }

    return key;
}

function multiplyNumeric(obj){
    for(var key in obj){
        if(!isNaN(obj[key])){
            obj[key] *= 2;
        }
    }

    return obj;
}

var array = [];
while(true){
    var number = prompt("Введите, пожалуйста, число", 0);

    if(number === "" || isNaN(number) || number === null){
        break;
    }

    array.push(+number);
}
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
alert(sum);
