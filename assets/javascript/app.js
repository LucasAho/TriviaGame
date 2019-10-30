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
var gameAns;
var gameRightAns;


//Game Object
var game = {
    currQuest: "",
    currAns: [],
    rightAns: "",
    questPick: function(){
        var q = questOpt[Math.floor(Math.random()*questOpt.length)];
        var old =[];
        var val;
        
        old.forEach(function(item){
            val = item;
            console.log(val);
        });
        if (val !== q) {
            this.currQuest = q.quest;
            this.currAns = q.ansSet;
            this.rightAns = q.rightAns;
            console.log(old);
        } else if (val === q){
            old.push(q);
            q = questOpt[Math.floor(Math.random()*questOpt.length)];
            console.log(old)
        }

    },
    newGame: function(){
        this.questPick();
        $("#time-text").html("<div>3s(pretend to count)</div>");
        $("#question-text").html(this.currQuest);
        $("#ansOne-text").html("<button id='0'>"+this.currAns[0]+"</button>");
            $("#0").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            }); 
            $("#ansTwo-text").html("<button id='1'>"+this.currAns[1]+"</button>");    
            $("#1").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            });             
        $("#ansThree-text").html("<button id='2'>"+this.currAns[2]+"</button>");
            $("#2").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            }); 
        $("#ansFour-text").html("<button id='3'>"+this.currAns[3]+"</button>");
            $("#3").on("click", function(){
                a = this.id;  
                game.ansCheck(a);                  
            });

    },
    //Function checks if the button id parameter is equal to the correct answer 
    //Both thisAns and a are strings
    ansCheck(a){        
        if (a === this.rightAns) {
            corrAns++;
            console.log(corrAns);
            this.newGame();
        } else if (a !== this.rightAns){
            this.newGame();
            incoAns++;
            console.log(incoAns);
        } else {
            console.log("How did you get back here?");
        }    
    }, 
    gameStart() {        
        this.questPick();
        var a = "";
        $("#time-text").html("<div>30s(pretend to count)</div>");
        $("#question-text").html(this.currQuest);
        $("#ansOne-text").html("<button id='0'>"+this.currAns[0]+"</button>");
            $("#0").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            }); 
        $("#ansTwo-text").html("<button id='1'>"+this.currAns[1]+"</button>");    
            $("#1").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            });             
        $("#ansThree-text").html("<button id='2'>"+this.currAns[2]+"</button>");
            $("#2").on("click", function(){
                a = this.id;
                game.ansCheck(a);
            }); 
        $("#ansFour-text").html("<button id='3'>"+this.currAns[3]+"</button>");
            $("#3").on("click", function(){
                a = this.id;  
                game.ansCheck(a);                  
            });
    },

      
}
//Loads start button for player when the document loads for the first time
$(document).ready(function(){
    $("#question-text").append("<button type='button' id='startbtn'>Start</button>");
    $("#startbtn").on("click", function(){
        game.gameStart();
    });
});
