//Objects for each question
var cardObjs = [    
    cardOne = {
        quest: "Which big cat has the longest tail?",
        ansSet: ["Snow Leopard","Tiger","Cheetah","Lion"],
        rightAns: "0",
        strAns: "Snow Leopard",
        pic: "leopard",
        fact: "Snow leopard's tails grow from 32-39 inches, often almost as long as their bodies."
    }, 
    cardTwo = {
        quest: "What does a guinea pig do when it gets excited?",
        ansSet: ["Binky","Peanut","Back-flip","Roll over"],
        rightAns: "1",
        strAns: "Peanut",
        pic: "pig",
        fact: "While rabbits often binky in excitement, guinea pigs will peanut. Look it up, its adorable."
    },   
    cardThree = {
        quest: "What is a baby llama called?",
        ansSet: ["Kid","Cub","Squirt","Cria"],
        rightAns: "3",
        strAns: "Cria",
        pic: "llama",
        fact: "Llamas are called crias as babies, cria being the spanish word for 'baby'"
    },
    cardFour = {
        quest: "Where are the majority of an octopod's neurons?",
        ansSet: ["The brain", "The arms", "The stomach", "The beak"],
        rightAns: "1",
        strAns: "The arms",
        pic: "octo",
        fact: "An octopus's arms have nearly twice as many neurons as it's brain, allowing its arms to taste, touch, and move without the brain."
    },
    cardFive = {
        quest: "What is the fastest swimmer in the ocean?",
        ansSet: ["Great-White Shark", "Bottlenose Dolphin", "Sailfish", "Mako Shark"],
        rightAns: "2",
        strAns: "Sailfish",
        pic: "sail",
        fact: "Sailfish can swim up to 70mph."
    },
    cardSix =  {
        quest: "How long do crows mate?",
        ansSet: ["For a season", "For life", "Once", "Till their babies leave"],
        rightAns: "1",
        strAns: "For life",
        pic: "crow",
        fact: "Crows and ravens mate for life and often share territory with their raised children."
    },
];


//Scorekeeping variables for player
var corrAns = 0;
var incoAns = 0;
var noAns = 0;

//Variables that set each card
var currQuest = "";
var currAns = [];
var currRig = "";
var currStr = "";
var currPic = "";
var currFact = "";

//Timer variables
var timeLeft = 0;
var intervalId;
var interOut;

//Game object contains all functions
game = {
    
    num: 0, //this variable will count up run each cardObj once   
    //Timer functions
    //Calls n for seconds to run
    runTimer: (n) => {
        timeLeft = n;     
        clearInterval(intervalId); 
        intervalId = setInterval(game.timeOut, 1000); //setInterval for question timer counts off timeLeft every second
    },
    interTime: (n) => {
        interOut = setTimeout(game.timeInter, 1000 * n); //setTimeout for inbetween questions, activating after n seconds
        
    },
    stopTimer: () => { //This stops the question timer as needed
        clearInterval(intervalId); 
        clearTimeout(interOut);        
    },
    timeOut: () => { //This function activates every second within runTimer
        timeLeft--;        
        $("#timeBox").text(timeLeft);
        if (timeLeft === 0) {
            game.stopTimer();
            game.interCard("timed");
        }
    },
    timeInter: () => { //This function checks if all trivia questions have been used and continues game from interCards
        if (game.num <= cardObjs.length-1) {
            game.cardWriter(game.num);
        } else if (game.num > cardObjs.length-1) {
            game.endCard();
            game.stopTimer();
            game.num = 0;
            corrAns = 0;
            incoAns = 0;
            noAns = 0;
        }
    },
    //This is the final card players will see, giving them a chance to see their scores and try again
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
    //This function uses parameter from the answer checker and tells player if their guess was right, shows a related img, and gives interTime a parameter of 3 seconds
    interCard: (ans) => {
        var status = "";
        game.interTime(6); //Change parameter to increase wait between rounds
        
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
        $("#ansBox").html(currFact);
        $("#phImg").html($("<img src='assets/images/" + currPic + ".jpg'>"));
    },
    //Function uses parameter equal to button ID and checks if it matches the correct answer integer
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
    //Function uses num parameter to incremement through the cardObj and write it's details to HTML
    cardWriter: (num) => {       
        var tempObj = cardObjs; 
        game.runTimer(30); //This parameter can be used to change the amount of time per question  
        //This clears out any possible data left from previous card
        $("#ansBox").empty();
        $("#phImg").empty();
        //This sets player variables for each cardObj
        currQuest = tempObj[num].quest;
        currAns = tempObj[num].ansSet;
        currRig = tempObj[num].rightAns;   
        currStr = tempObj[num].strAns; 
        currPic = tempObj[num].pic;   
        currFact = tempObj[num].fact;  
        
        //Writes timer, question, and answer buttons to html
        $("#timeBox").text(timeLeft);
        $("#questionBox").html(currQuest);
        $("#ansBox").append("<button class= 'col-12' id='0'>"+currAns[0]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='1'>"+currAns[1]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='2'>"+currAns[2]+"</button>");
        $("#ansBox").append("<button class= 'col-12' id='3'>"+currAns[3]+"</button>"); 
        //Gives each created button a way to check its own id and run it into the ansCheck function
        $("button").each(function(index){            
            $("#"+ index).on("click", function(){
                z = this.id; //z will be checked against the rightAns values in cardObjs
                game.ansCheck(z);
                
            }); 
        });
    },
    //This gives the player a way to start the game
    startWrite: () => {
            if(game.num === 0) {
            $("#phImg").append("<button type='button' id='startbtn'>Start</button>");
            $("#startbtn").on("click", function(){
                //Summon first card
                game.cardWriter(game.num);                        
            }); 
        } else {
            console.log("Captain!! Captain, we have a breach!"); //This shouldn't happen
        }
    }
    
}
//Loads access to startWrite when the page loads
$(document).ready(game.startWrite());

    