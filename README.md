# TriviaGame
This game uses jquery and javascript to ask players trivia questions, time them on each question, and store their responses. The game is deployed to https://lucasaho.github.io/TriviaGame/


## Game Description
After initiating the game with a start button, players are given one question, four answers, and are timed for 30s. After answering or timing out on a question, player is given the subsequent question, until no more questions remain. At this point, the player's number of correct, incorrect, and unanswered questions is displayed, offering a button to start the game over. 

## File Infrastructure
### HTML
* index.html: Contains the basic layout of the page, as well as links to jquery, bootstrap, and the external JS and CSS files.

### Javascript
* app1.js: Contains the second version of the game, which creates logic for updating the HTML based on time, question, and answers. This will also track the player's score and give the player reset functionality. The previous version (app.js) did not use an object to contain game functions, and did not utilize timers. Users seeking to change the timer functionality of the game may edit the timer parameters on js lines 121 & 157 to their desired time. Default is 30 seconds for runTimer and 5 seconds for interTime. More questions can also be added simply by adding another element to the cardObjs array with the same syntax as the previous questions. 

### Image assets 
The following images were used
* ![Image of Leopard](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/leopard.jpg)
* ![Image of Pig](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/pig.jpg)
* ![Image of Crow](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/crow.jpg)
* ![Image of Llama](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/llama.jpg)
* ![Image of Sailfish](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/sail.jpg)
* ![Image of Octopus](https://github.com/LucasAho/TriviaGame/blob/master/assets/images/octo.jpg)

### CSS


### CSS

