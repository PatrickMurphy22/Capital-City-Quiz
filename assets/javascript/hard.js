
// Add ROUND variable and set to 1.
let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`)

// Add SCORE variable and set to 1.
let score = 0;
document.getElementById("score").innerHTML = (`Sore: ${score}/10`)

// Set variables to undefined to use throught code.
let currentQuestion;
let funFacts;

// added DOM to variables to use throughout code
let finalScore = document.getElementById("final-score");
let result = document.getElementById("title");
let buttons = document.getElementsByClassName("hardAnswer");
let next = document.getElementById("next");
let scoreContainer = document.getElementById("score-container");
let scoreBox = document.getElementById("score-box");
let answerContainer = document.getElementById("answer-container");
let qBox = document.getElementById("question-box");


const hardCountrys = [
    {
        country:("Chad"),
        citys:["N'Djamena","","",""],
        capital:("N'Djamena")
    },
    {
        country:("Colombia"),
        citys:["Bogota","","",""],
        capital:("Bogota")
    },
    {
        country:("Ethiopia"),
        citys:["Addis Ababa","","",""],
        capital:("Addis Ababa")
    },
    {
        country:("Indonesia"),
        citys:["Jakarta","","",""],
        capital:("Jakarta")
    },
    {
        country:("Jordan"),
        citys:["Amman","","",""],
        capital:("Amman")
    },
    {
        country:("Mozambique"),
        citys:["Maputo","","",""],
        capital:("Maputo")
    },
    {
        country:("Trinidad and Tobago"),
        citys:["Port of Spain","","",""],
        capital:("Port of Spain")
    },
    {
        country:("Libya"),
        citys:["Tripoli","","",""],
        capital:("Tripoli")
    },
    {
        country:("Pakistan"),
        citys:["Islamabad","","",""],
        capital:("Islamabad")
    },
    {
        country:("Albania"),
        citys:["Tirana","","",""],
        capital:("Tirana")
    },
    {
        country:("Kosovo"),
        citys:["Pristina","","",""],
        capital:("Pristina")
    },
    {
        country:("Cameroon"),
        citys:["Yaounde","","",""],
        capital:("Yaounde")
    },
    {
        country:("Mongolia"),
        citys:["Ulaanbaatar","","",""],
        capital:("Ulaanbaatar")
    },
    {
        country:("Uruguay"),
        citys:["Montevideo","","",""],
        capital:("Montevideo")
    },
    {
        country:("Saudi Arabia	"),
        citys:["Riyadh","","",""],
        capital:("Riyadh")
    },

]

//Fun Facts in Array format.
const hardFacts = [
    {
        fact: (" Japan expeiences 20% of the world's 6.0-magnitude or higher earthquakes")
    },
    {
        fact: ("Everyone who lives in Germany, even foreigners, can attend college tuition-free. ")
    },
    {
        fact: ("Some say tea is life, British people reportedly drink 165 million cups of tea a day")
    },
    {
        fact: ("France is the most visited country in the world with 89 million annual tourists.")
    },
    {
        fact: ("Naples of course, is the birthplace of pizza ")
    },
    {
        fact: ("Believe it or not, there are no leprechauns in Ireland")
    },

]

//Easy game mode function, calls all functions in one function.
function hardGame(){
    displayQuestion();
    nextRound();
    endGame();
}

//function to display country and relative citys all in random order, then removes called array.
function displayQuestion(){
    
    let randomise = Math.floor(Math.random() * hardCountrys.length )
    currentQuestion = hardCountrys[randomise]

    hardCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("hard-country");
    displayCountry.innerHTML = currentQuestion.country;

     //credited to sebhastian.com
    currentQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentQuestion.citys[i]
    }
}


//Add eventlistener to all buttons and if the right button is selected change background color and increase score.
function playerChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", playerPick )

        function playerPick(){
            if(currentQuestion.capital === currentQuestion.citys[i]){
                score++;
                document.getElementById("score").innerHTML = (`Sore: ${score}/10`)
                buttons[i].style.backgroundColor = "green"
                document.body.style.backgroundColor = "green"
                buttons[i].style.color = "white"
                console.log(`${currentQuestion.citys[i]} is correct`)
                }else{
                buttons[i].style.backgroundColor = "red"
                document.body.style.backgroundColor = "red"
                buttons[i].style.color = "white"
                console.log(`${currentQuestion.citys[i]} is wrong`)
                }
            }  
        }   
    }    

// Adds event listener that increases round number and changes question.
function nextRound(){
    playerChoice();
    next.addEventListener("click", () => {
        displayQuestion();
        console.log(buttons)
        document.body.style.backgroundColor = "rgb(0, 222, 230)"
        for(let i = 0; i < 4; i++){
            buttons[i].style.backgroundColor = "white"
            buttons[i].style.color = "blue"
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`)
        endGame();
    })
}


// Manipulates the DOM after 10 rounds is reached to display score card
function endGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.id = "finish"
        next.className = "finish"
        let finish = document.getElementById("finish")
        finish.addEventListener("click", () =>{
            for(let i = 0; i < 4; i++){
                let hideButtons = document.getElementsByClassName("hardAnswer");
                hideButtons[i].style.visibility = "hidden"
                hideButtons[i].style.height = "0vh"
            }
            qBox.style.visibility = "hidden"
            qBox.style.height = "0vh"
            scoreContainer.removeAttribute("hidden")
            scoreBox.style.height = "0vh"
            scoreBox.style.visibility = "hidden"
            answerContainer.style.height = "40vh"
            finish.style.visibility = "hidden"

            finalScore.innerHTML = score;
            if(score < 5 ){
                result.innerHTML = "Do you even know where your house is??"
            }else if(score <= 7 ){
                result.innerHTML = "You're far from a globe trotter, but youre getting there"
            }else{
                result.innerHTML = "Not bad, maybe you are ready to take the next step..."
            }

            let fun = document.getElementById("fun-fact");
            let random = Math.floor(Math.random() * hardFacts.length)
            funFacts = hardFacts[random]
            fun.innerHTML = funFacts.fact
        })
    }
}

// Calls end game function containing all relative functions
hardGame();
