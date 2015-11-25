function addClass(obj, cls){
    var arr = obj.className ? obj.className.split(" ") : [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == cls){
            return;
        }
    }

    arr.push(cls);
    obj.className = arr.join(' ');
}

function removeClass(obj, cls){
    var arr = obj.className.split(" ");

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == cls){
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr.slice().sort();
console.log(arrSorted);


var arr2 = [1, 2, 3, 4, 5];

function randomSort(a, b){
    return Math.random() - 0.5;
}

arr2.sort(randomSort);
console.log(arr2);


var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya , masha , vovochka ];

people.sort(mySort);
function mySort(personA, personB){
    return personA.age - personB.age;
}
for(var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


function unique(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        var key = arr[i];
        obj[key] = true;
    }

    return Object.keys(obj);
}


function aclean(arr){
    var obj = {};

    for(var i = 0; i < arr.length; i++){
        var sorted = arr[i].toLowerCase().split('').sort().join('');

        obj[sorted] = arr[i];
    }
    var result = [];

    for(var key in obj){
        result.push(obj[key]);
    }

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));


function isPal(string){
    var array = string.toLowerCase().split("");

    for(var j = 0; j < array.length; j++) {
      if(array[j] == " "){
          array.splice(j, 1);
          j--;
      }
    }

    for(var i = 0; i < array.length/2; i++){
        if(array[i] == array[array.length - 1 - i]){
            return true;
        }
        return false;
    }

}
var string = "А роза упала на лапу Азора";
console.log(isPal(string));
