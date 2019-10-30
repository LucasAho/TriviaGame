///Game Initialization
///
///

//Array of question objects with properties of question, answer sets, and correct answer
var questOpt = [
    questOne = {
        quest: "Which big cat has the longest tail?",
        ansSet: ["Snow Leopard","Tiger","Cheetah","Lion"],
        rightAns: "0"
    }, 
    questTwo = {
        quest: "What does a guinea pig do when it gets excited?",
        ansSet: ["Binky","Peanut","Back-flip","Roll over"],
        rightAns: "1"
    },   
    questThree = {
        quest: "What is a baby llama called?",
        ansSet: ["Kid","Cub","Squirt","Cria"],
        rightAns: "3"
    },
    questFour = {
        quest: "Where are the majority of an octopod's neurons?",
        ansSet: ["The brain", "The arms", "The stomach", "The beak"],
        rightAns: "1"
    },
    questFive = {
        quest: "What is the fastest swimmer in the ocean?",
        ansSet: ["Great-White Shark", "Bottlenose Dolphin", "Sailfish", "Mako Shark"],
        rightAns: "2"
    },
    questFive = {
        quest: "How long do crows mate?",
        ansSet: ["For a season", "For life", "Once", "Till their baby leaves"],
        rightAns: "1"
    },
];

//Scorekeeping variables for player
var corrAns = 0;
var incoAns = 0;
var noAns = 0;
var timeLeft = 0;
var gameQuest;

//Game Object
var game = {
    currQuest,
    currAns,
    rightAns,
    gameStart: function() {
        if (corrAns ===0) {
            $("#time-text").html("<div>30s(pretend to count)</div>");
            $("#question-text").html(this.currQuest);
            
            var obj = {one: 1, two: 2, three: 3, four: 4}
            jQuery.each(this.currAns)
            $("#ansOne-text").html("<button id='0'>"+this.currAns[0]+"</button>");
                $("#0").on("click", function(){
                ansCheck(this.id);
                });

        }

    }
}
//Picks question object at random and returns it
function questPick(){
    var q = questOpt[Math.floor(Math.random()*questOpt.length)];
    game.currQuest = q.quest;
    game.currAns = q.ansSet;
    game.rightAns = q.ansSet;
}



///// Functions for running game
///
/////
/////


//Function checks if the button id parameter is equal to the correct answer 
    //Both thisAns and a are strings
function ansCheck(a){
    var thisAns = gameQuest.rightAns
    if (a === thisAns) {
        console.log("you win!");
        corrAns++;
    } else if (a !== thisAns){
        console.log("you lose!");
        incoAns++;
    } else {
        console.log("How did you get back here?");
    }    
}   

//Function started by start button and gives player a question
//function gameStart(){       
    //$("#time-text").html("<div>30s(pretend to count)</div>");
    //$("#question-text").html(gameQuest.quest);
    $("#ansOne-text").html("<button id='0'>"+gameQuest.ansSet[0]+"</button>");
        $("#0").on("click", function(){
            ansCheck(this.id);
            
        });
    $("#ansTwo-text").html("<button id='1'>"+gameQuest.ansSet[1]+"</button>");
        $("#1").on("click", function(){
            ansCheck(this.id);
            
        });
    $("#ansThree-text").html("<button id='2'>"+gameQuest.ansSet[2]+"</button>");
        $("#2").on("click", function(){
            ansCheck(this.id);
            
        });
    $("#ansFour-text").html("<button id='3'>"+gameQuest.ansSet[3]+"</button>");
        $("#3").on("click", function(){
            ansCheck(this.id);
            
        });             
}

//Loads start button for player when the document loads for the first time
$(document).ready(function(){
    $("#question-text").append("<button type='button' id='startbtn'>Start</button>");
    $("#startbtn").on("click", function(){
        gameStart();
    });
});
