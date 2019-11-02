//Objects for each question
var cardObj = [    
    cardOne = {
        quest: "Which big cat has the longest tail?",
        ansSet: ["Snow Leopard","Tiger","Cheetah","Lion"],
        rightAns: "0",
        strAns: "Snow Leopard",
        pic: "leopard"

    }, 
    cardTwo = {
        quest: "What does a guinea pig do when it gets excited?",
        ansSet: ["Binky","Peanut","Back-flip","Roll over"],
        rightAns: "1",
        strAns: "Peanut",
        pic: "pig"
    },   
    cardThree = {
        quest: "What is a baby llama called?",
        ansSet: ["Kid","Cub","Squirt","Cria"],
        rightAns: "3",
        strAns: "Cria",
        pic: "llama"
    },
    cardFour = {
        quest: "Where are the majority of an octopod's neurons?",
        ansSet: ["The brain", "The arms", "The stomach", "The beak"],
        rightAns: "1",
        strAns: "The arms",
        pic: "octo"
    },
    cardFive = {
        quest: "What is the fastest swimmer in the ocean?",
        ansSet: ["Great-White Shark", "Bottlenose Dolphin", "Sailfish", "Mako Shark"],
        rightAns: "2",
        strAns: "Sailfish",
        pic: "sail"
    },
    cardSix =  {
        quest: "How long do crows mate?",
        ansSet: ["For a season", "For life", "Once", "Till their baby leaves"],
        rightAns: "1",
        strAns: "For life",
        pic: "crow"

    },
];


//Scorekeeping variables for player
var corrAns = 0;
var incoAns = 0;
var noAns = 0;

//Variables that 
var currQuest = "";
var currAns = [];
var currRig = "";
var currStr = "";
var currPic = "";

var timeLeft = 0;
var intervalId;
var interOut;

game = {
    num: 0,
    
    runTimer: (n) => {
        timeLeft = n;     
        clearInterval(intervalId); 
        intervalId = setInterval(game.timeOut, 1000);
    },
    interTime: (n) => {
        interOut = setTimeout(game.timeInter, 1000 * n);
        
    },
    stopTimer: () => {
        clearInterval(intervalId); 
        clearTimeout(interOut);        
    },
    timeOut: () => {
        timeLeft--;        
        $("#timeBox").text(timeLeft);
        if (timeLeft === 0) {
            game.stopTimer();
            game.interCard("timed");
            console.log(game.num);
        }
    },
    timeInter: () => {
        if (game.num <= 5) {
            game.cardWriter(game.num);
        } else if (game.num > 5) {
            game.endCard();
            game.stopTimer();
            game.num = 0;
            corrAns = 0;
            incoAns = 0;
            noAns = 0;
        }
    },
    endCard: () => {
        $("#phImg").empty();
        $("#questionBox").html("All done, here's how you did!");
        $("#ansBox").html("Correct Answers: " + corrAns + "<br> Incorrect Answers: " + incoAns + "<br> Unanswered: " + noAns);
        $("#ansBox").append("<div class= 'col-12'><button type='button' id='startbtn'>Start Over?</button></div>");
            $("#startbtn").on("click", function(){
                //Summon first card
                game.cardWriter(game.num);
            });
    },
    interCard: (ans) => {
        var status = "";
        game.interTime(3);
        if(ans === "right") {
            status = "Correct!";
        } else if (ans === "wrong"){
            status = "Incorrect!";
        } else if (ans === "timed"){
            status = "Out of Time!";
            $("button").remove(); 
            noAns++;
            game.num++;
        } 
        $("#questionBox").html(status);
        $("#ansBox").html("The correct answer was: " + currStr);
        $("#phImg").html($("<img src='assets/images/" + currPic + ".jpg'>"));
    },

    ansCheck: (z) => {  
        game.stopTimer();         
        if (z === currRig) {
            corrAns++;
            game.num++;   
            $("button").remove();  
            var ans = "right";  
            game.interCard(ans);
        } else if (z !== currRig){
            incoAns++;
            game.num++;
            $("button").remove(); 
            var ans = "wrong";
            game.interCard(ans);
        } 
    },
    cardWriter: (num) => {       
        var tempObj = cardObj;
        game.runTimer(30);    
        $("#ansBox").empty();
        $("#phImg").empty();
        currQuest = tempObj[num].quest;
        currAns = tempObj[num].ansSet;
        currRig = tempObj[num].rightAns;   
        currStr = tempObj[num].strAns; 
        currPic = tempObj[num].pic;     
        $("#timeBox").text(timeLeft);
        $("#questionBox").html(currQuest);
        $("#ansBox").append("<button class= 'col-12' id='0'>"+currAns[0]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='1'>"+currAns[1]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='2'>"+currAns[2]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='3'>"+currAns[3]+"</button>"); 
        $("button").each(function(index){            
            $("#"+ index).on("click", function(){
                z = this.id;
                game.ansCheck(z);
                
            }); 
        });
    },
    
    startWrite: () => {
        console.log(corrAns);
            if(game.num === 0) {
            $("#phImg").append("<button type='button' id='startbtn'>Start</button>");
            $("#startbtn").on("click", function(){
                //Summon first card
                game.cardWriter(game.num);
                           
            }); 
        } else {
            console.log("Captain!! Captain, we have a breach!");
        }
    }
    
}
$(document).ready(game.startWrite());

    