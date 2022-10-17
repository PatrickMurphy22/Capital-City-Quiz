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
let buttons = document.getElementsByClassName("easyAnswer");
let next = document.getElementById("next");
let scoreContainer = document.getElementById("score-container");
let scoreBox = document.getElementById("score-box");
let answerContainer = document.getElementById("answer-container");
let qBox = document.getElementById("question-box");


// List of EASY countrys in array format.
const easyCountrys= [

    {
        country:("Scotland"),
        citys:["Edinburgh","Glasgow","Aberdeen","Dundee"],
        capital:("Edinburgh")
    },
    {
        country:("Sweden"),
        citys:["Stockholm","Malmo","Gothenburg","Helsinburg"],
        capital:("Stockholm")
    },
    {
        country:("USA"),
        citys:["Washington DC","New York","San Francisco","Washington"],
        capital:("Washington DC")
    },
    {
        country:("France"),
        citys:["Paris","Marseille","Nice","Lyon"],
        capital:("Paris")
    },
    {
        country:("Mexico"),
        citys:["Mexico City","Cancun","Guadalajara","Merida"],
        capital:("Mexico City")
    },
    {
        country:("China"),
        citys:["Beijing","Shanghi","Wuhan","Chongqing"],
        capital:("Beijing")
    },
    {
        country:("Japan"),
        citys:["Tokyo","Kyoto","Osaka","Hiroshima"],
        capital:("Tokyo")
    },
    {
        country:("Thailand"),
        citys:["Bangkok","Chaing Mai","Phuket","Pattaya"],
        capital:("Bangkok")
    },
    {
        country:("South Korea"),
        citys:["Seoul","Busan","Pyongyang","incheon"],
        capital:("Seoul")
    },
    {
        country:("Spain"),
        citys:["Madrid","Barcelona","Malaga","Sevilla"],
        capital:("Madrid")
    },
    {
        country:("Ireland"),
        citys:["Dublin","Limerick","Cork","Galway"],
        capital:("Dublin")
    },
    {
        country:("Poland"),
        citys:["Warsaw","Krakow","Wroclaw","Gdansk"],
        capital:("Warsaw")
    },
    {
        country:("Germany"),
        citys:["Berlin","Stutgart","Hamburg","Frankfurt"],
        capital:("Berlin")
    },
    {
        country:("Italy"),
        citys:["Rome","Venice","Milan","Naples"],
        capital:("Rome")
    },
]

//Fun Facts in Array format.
const easyFacts = [
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
function easyGame(){
    displayQuestion();
    playerPick();
    nextRound();
    endGame();
}

//function to display country and relative citys all in random order, then removes called array.
function displayQuestion(){
    
    let randomise = Math.floor(Math.random() * easyCountrys.length )
    currentQuestion = easyCountrys[randomise]

    easyCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("easy-country");
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
function playerPick(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", ()=> {
            if(currentQuestion.capital === currentQuestion.citys[i]){
                score++;
                document.getElementById("score").innerHTML = (`Sore: ${score}/10`)
                buttons[i].style.backgroundColor = "green"
                document.body.style.backgroundColor = "green"
                buttons[i].style.color = "white"
            }else{
                buttons[i].style.backgroundColor = "red"
                document.body.style.backgroundColor = "red"
                buttons[i].style.color = "white"
            }
        });
    }
}

// Adds event listener that increases round number and changes question.
function nextRound(){

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
                let hideButtons = document.getElementsByClassName("easyAnswer");
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
            let random = Math.floor(Math.random() * easyFacts.length)
            funFacts = easyFacts[random]
            fun.innerHTML = funFacts.fact
        })
    }
}

// Calls end game function containing all relative functions
easyGame();