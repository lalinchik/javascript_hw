function getMissingElement(superImportantArray){
    for(var i = 0; i < 10; i++){
        if(superImportantArray.indexOf(i) === -1){
            return i;
        }
    }
}

var arr = [9,2,4,5,7,0,8,6,1];
console.log(getMissingElement(arr));



var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for(var i = 0; i < questions.length; i++){
    questions[i].usersAnswer = null;
}

