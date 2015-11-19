/**
 * Created by Alina on 19.11.2015.
 */
"use strict";

/*
 var year = prompt("Какой сейчас год?", "");
 if(year === "2015"){
 alert("Вы правы!");
 } else {
 alert("С луны свалися? 2015!");
 }
 */

/*var num = +prompt("Введите любое целое число?");
 if(num > 0) {
 alert(1);
 } else if(num < 0) {
 alert(-1);
 } else {
 alert(0);
 }*/

var login = prompt("Введите ваш логин", "");
if (login === "admin") {
    var password = prompt("Введите ваш пароль", "")
    if (password.localeCompare("passw0rd") === 0) {
        alert("Welcome home!");
    } else if (password == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (login == null) {
    alert("Canceled");
} else {
    alert("Access denied");
}

var result;
var a = 1, b = 2;
a + b >= 3 ? result = "Yep!" : result = "Noup!";

var name = 'admin', text;
var text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' : '';