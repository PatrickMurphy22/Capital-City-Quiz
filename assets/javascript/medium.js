
// Add ROUND variable and set to 1.
let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`)

// Add SCORE variable and set to 1.
let score = 0;
document.getElementById("score").innerHTML = (`Score: ${score}/10`)

// Set variables to undefined to use throught code.
let currentQuestion;
let funFacts;

// added DOM to variables to use throughout code
let finalScore = document.getElementById("final-score");
let result = document.getElementById("title");
let buttons = document.getElementsByClassName("mediumAnswer");
let next = document.getElementById("next");
let scoreContainer = document.getElementById("score-container");
let scoreBox = document.getElementById("score-box");
let answerContainer = document.getElementById("answer-container");
let qBox = document.getElementById("question-box");

const mediumCountrys = [
    {
        country:("Afganistan"),
        citys:["Kabul","Herat","Jalalabad","Khost"],
        capital:("Kabul")
    },
    {
        country:("Australia"),
        citys:["Canberra","Melbourne","Sydney","Perth"],
        capital:("Canberra")
    },
    {
        country:("Cambodia"),
        citys:["Phnom Penh","Siem Reap","Poipet","Battambang"],
        capital:("Phnom Penh")
    },
    {
        country:("Croatia"),
        citys:["Zagreb","Split","Dubrovnik","Zadar"],
        capital:("Zagreb")
    },
    {
        country:("Malaysia"),
        citys:["Kuala Lumpur","George Town","Ipoh","Kuching"],
        capital:("Kuala Lumpur")
    },
    {
        country:("Ghana"),
        citys:["Accra","Kumasi","Cape Coast","Tamale"],
        capital:("Accra")
    },
    {
        country:("Iraq"),
        citys:["Baghdad","Mosul","Ramadi","Samarra"],
        capital:("Baghdad")
    },
    {
        country:("Kenya"),
        citys:["Nairobi","Mombasa","Meru","Kisumu"],
        capital:("Nairobi")
    },
    {
        country:("Lebanon"),
        citys:["Beirut","Tyre","Byblos","bint Jbeil"],
        capital:("Beirut")
    },
    {
        country:("Morocco"),
        citys:["Rabat","Marrakesh","Casablanca","Fes"],
        capital:("Rabat")
    },
    {
        country:("Nepal"),
        citys:["Kathmandu","Pokhara","Lalitpur","Biratnagar"],
        capital:("Kathmandu")
    },
    {
        country:("Peru"),
        citys:["Lima","Cusco","Arequipa","Chiclayo"],
        capital:("Lima")
    },
    {
        country:("New Zealand"),
        citys:["Wellington","Auckland","Christchurch","Napier"],
        capital:("Wellington")
    },
    {
        country:("Brazil"),
        citys:["Brasilia","Rio de Janeiro","Sao Paulo","Salvador"],
        capital:("Brasilia")
    },
    {
        country:("Vietnam"),
        citys:["Hanoi","Ho Chi Minh","Hoi An","Da Nang"],
        capital:("Hanoi")
    },
]
//Fun Facts in Array format.
const mediumFacts = [
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
function mediumGame(){
    displayQuestion();
    playerChoice();
    nextRound();
    endGame();
}

//function to display country and relative citys all in random order, then removes called array.
function displayQuestion(){
    
    let randomise = Math.floor(Math.random() * mediumCountrys.length )
    currentQuestion = mediumCountrys[randomise]

    mediumCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("medium-country");
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
        buttons[i].addEventListener("click", () => {
            if(currentQuestion.capital == currentQuestion.citys[i]){
                buttons[i].id = "correct"
                if(buttons[i].id === "correct"){
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`)
                    document.body.style.backgroundColor = "green"
                    buttons[i].disabled = true;
                }
                }else{
                    document.body.style.backgroundColor = "red"
                    buttons[i].id = "wrong"
                    buttons[i].disabled = true;
                }
            })  
        }   
    }    


// Adds event listener that increases round number and changes question.
function nextRound(){

    next.addEventListener("click", () => {
        displayQuestion();
        document.body.style.backgroundColor = "rgb(174, 46, 212)"
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
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
        let finish = document.getElementById("finish")
        finish.addEventListener("click", () =>{
            for(let i = 0; i < 4; i++){
                let hideButtons = document.getElementsByClassName("mediumAnswer");
                hideButtons[i].style.visibility = "hidden"
                hideButtons[i].style.height = "0vh"
            }
            document.querySelector(".next").style.visibility = "hidden"
            qBox.style.visibility = "hidden"
            qBox.style.height = "0vh"
            scoreContainer.removeAttribute("hidden")
            scoreBox.style.height = "0vh"
            scoreBox.style.visibility = "hidden"
            answerContainer.style.height = "35vh"
            finish.style.width = "0"
            

            finalScore.innerHTML = score;
            if(score < 5 ){
                result.innerHTML = "Do you even know where your house is??"
            }else if(score <= 7 ){
                result.innerHTML = "You're far from a globe trotter, but you're getting there"
            }else{
                result.innerHTML = "Not bad, maybe you are ready to take the next step..."
            }

            let fun = document.getElementById("fun-fact");
            let random = Math.floor(Math.random() * mediumFacts.length)
            funFacts = mediumFacts[random]
            fun.innerHTML = funFacts.fact
        })
    }
}

// Calls end game function containing all relative functions
mediumGame();