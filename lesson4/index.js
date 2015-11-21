/**
 * Created by Alina on 21.11.2015.
 */
"use strict";
function fib(num){
    if(num == 1 || num == 2){
        return 1;
    } return fib(num - 1) + fib(num - 2);
}


function checkSpam(str){
    var newStr = str.toLowerCase();
    if(newStr.indexOf("spam") !== -1 || newStr.indexOf("sex") !== -1){
        return true;
    }
    return false;
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));

function cutLine(str){
    if(str.length > 20){
        str = str.slice(0, 17) + "...";
    }
    return str;
}

console.log(cutLine("Первый аргумент имеет такой же смысл, как и в substring, а второй содержит не конечную позицию,"));