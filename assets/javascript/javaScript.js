// Add ROUND variable and set to 1.
let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`)

// Add SCORE variable and set to 1.
let score = 0;
document.getElementById("score").innerHTML = (`Score: ${score}/10`)

// added DOM to variables to use throughout code
let finalScore = document.getElementById("final-score");
let result = document.getElementById("title");
let buttons = document.getElementsByClassName("answer");
let next = document.getElementById("next");
let scoreContainer = document.getElementById("score-container");
let scoreBox = document.getElementById("score-box");
let scoreCard = document.getElementsByClassName("score-card");
let answerContainer = document.getElementById("answer-container");
let qBox = document.getElementById("question-box");
let gameBox = document.getElementById("game-mode");
let difficultyMode = document.getElementById("difficulty-modes");
let easyMode = document.getElementById("easy-container");
let medMode = document.getElementById("medium-container");
let hardMode = document.getElementById("hard-container");
let header = document.getElementById("header-box");

qBox.style.height = "0vh"
scoreBox.style.height = "0vh"
answerContainer.style.height = "0vh"
gameBox.style.height = "0vh"

// Set variables to undefined to use throught code.
let currentEasyQuestion;
let currentMedQuestion;
let currentHardQuestion;
let funFacts;

easyMode.addEventListener("click", () =>{
    difficultyMode.style.visibility = "hidden";
    difficultyMode.style.height = "0vh";
    gameBox.style.visibility = "visible";
    gameBox.style.height = "85vh";
    gameBox.style.backgroundColor = "rgb(0, 222, 230)"
    header.style.backgroundColor = "rgb(21, 87, 111)"
    header.style.color = "white"
    qBox.style.height = "20vh"
    scoreBox.style.height = "8vh"
    scoreBox.style.marginTop = "20px"
    easyGame();
})

medMode.addEventListener("click", () =>{
    difficultyMode.style.visibility = "hidden";
    difficultyMode.style.height = "0vh";
    gameBox.style.visibility = "visible";
    gameBox.style.height = "85vh";
    gameBox.style.backgroundColor = "rgb(174, 46, 212)"
    header.style.backgroundColor = "rgb(97, 30, 94)"
    header.style.color = "white"
    qBox.style.height = "20vh"
    scoreBox.style.height = "8vh"
    scoreBox.style.marginTop = "20px"
    mediumGame();
})

hardMode.addEventListener("click", () =>{
    difficultyMode.style.visibility = "hidden";
    difficultyMode.style.height = "0vh";
    gameBox.style.visibility = "visible";
    gameBox.style.height = "85vh";
    gameBox.style.backgroundColor = "rgba(153, 6, 6)"
    header.style.backgroundColor = "rgb(73, 13, 13)"
    header.style.color = "white"
    qBox.style.height = "20vh"
    scoreBox.style.height = "8vh"
    scoreBox.style.marginTop = "20px"
    hardGame();
})

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

const hardCountrys = [
    {
        country:("Chad"),
        citys:["N'Djamena","Sarh","Kelo","Abeche"],
        capital:("N'Djamena")
    },
    {
        country:("Colombia"),
        citys:["Bogota","Medellin","Cali","Cartagena"],
        capital:("Bogota")
    },
    {
        country:("Ethiopia"),
        citys:["Addis Ababa","Gondar","Dire Dawa","Mek'ele"],
        capital:("Addis Ababa")
    },
    {
        country:("Slovenia"),
        citys:["Ljubljana","Maribor","Bled","Koper"],
        capital:("Ljubljana")
    },
    {
        country:("Jordan"),
        citys:["Amman","Yemen","Oman","Irbid"],
        capital:("Amman")
    },
    {
        country:("Mozambique"),
        citys:["Maputo","Beira","Nacala","Tete"],
        capital:("Maputo")
    },
    {
        country:("Trinidad and Tobago"),
        citys:["Port of Spain","Port Fortin","San Fernando","Rio Claro"],
        capital:("Port of Spain")
    },
    {
        country:("Libya"),
        citys:["Tripoli","Benghazi","Khoms","Tobruk"],
        capital:("Tripoli")
    },
    {
        country:("Pakistan"),
        citys:["Islamabad","Lahore","Karachi","Faisalabad"],
        capital:("Islamabad")
    },
    {
        country:("Albania"),
        citys:["Tirana","Berat","Kruje","Sarande"],
        capital:("Tirana")
    },
    {
        country:("Kosovo"),
        citys:["Pristina","Prizren","Preja","Mitrovica"],
        capital:("Pristina")
    },
    {
        country:("Cameroon"),
        citys:["Yaounde","Bamenda","Douala","Ngaoundere"],
        capital:("Yaounde")
    },
    {
        country:("Mongolia"),
        citys:["Ulaanbaatar","Ulaangom","Darkhan","Murun"],
        capital:("Ulaanbaatar")
    },
    {
        country:("Uruguay"),
        citys:["Montevideo","Salto","Paysandu","Maldanado"],
        capital:("Montevideo")
    },
    {
        country:("Saudi Arabia"),
        citys:["Riyadh","Jeddah","Medina","Mecca"],
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
function easyGame(){
    displayEasyQuestion();
    easyChoice();
    easyRound();
    endEasyGame();
}

function mediumGame(){
    displayMedQuestion();
    medChoice();
    medRound();
    endMedGame();
}

function hardGame(){
    displayHardQuestion();
    hardChoice();
    hardRound();
    endHardGame();
}

//function to display country and relative citys all in random order, then removes called array.
function displayEasyQuestion(){
    
    let randomise = Math.floor(Math.random() * easyCountrys.length )
    currentEasyQuestion = easyCountrys[randomise]

    easyCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("country");
    displayCountry.innerHTML = currentEasyQuestion.country;

     //credited to sebhastian.com
    currentEasyQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentEasyQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentEasyQuestion.citys[i]
    }
}


//Add eventlistener to all buttons and if the right button is selected change background color and increase score.
function easyChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentEasyQuestion.capital == currentEasyQuestion.citys[i]){
                buttons[i].id = "correct"
                if(buttons[i].id === "correct"){
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`)
                    gameBox.style.backgroundColor = "green"
                    buttons[i].disabled = true;
                }
                }else{
                    gameBox.style.backgroundColor = "red"
                    buttons[i].id = "wrong"
                    buttons[i].disabled = true;
                }
            })  
        }   
    }    


// Adds event listener that increases round number and changes question.
function easyRound(){

    next.addEventListener("click", () => {
        displayEasyQuestion();
        gameBox.style.backgroundColor = "rgb(0, 222, 230)"
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;

        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`)
        endEasyGame();
    })
}


// Manipulates the DOM after 10 rounds is reached to display score card
function endEasyGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.id = "finish"
        let finish = document.getElementById("finish")
        finish.addEventListener("click", () =>{
            for(let i = 0; i < 4; i++){
                let hideButtons = document.getElementsByClassName("answer");
                hideButtons[i].style.visibility = "hidden"
                hideButtons[i].style.height = "0vh"
            }

            for(let i = 0; i < 3; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(27, 98, 190), rgb(8, 216, 216) )"
                scoreCard[i].style.color = "white"
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
            let random = Math.floor(Math.random() * easyFacts.length)
            funFacts = easyFacts[random]
            fun.innerHTML = funFacts.fact
        })
    }
}


//function to display country and relative citys all in random order, then removes called array.
function displayMedQuestion(){
    
    let randomise = Math.floor(Math.random() * mediumCountrys.length )
    currentMedQuestion = mediumCountrys[randomise]

    mediumCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("country");
    displayCountry.innerHTML = currentMedQuestion.country;

     //credited to sebhastian.com
    currentMedQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentMedQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentMedQuestion.citys[i]
    }
}


//Add eventlistener to all buttons and if the right button is selected change background color and increase score.
function medChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentMedQuestion.capital == currentMedQuestion.citys[i]){
                buttons[i].id = "correct"
                if(buttons[i].id === "correct"){
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`)
                    gameBox.style.backgroundColor = "green"
                    buttons[i].disabled = true;
                }
                }else{
                    gameBox.style.backgroundColor = "red"
                    buttons[i].id = "wrong"
                    buttons[i].disabled = true;
                }
            })  
        }   
    }    


// Adds event listener that increases round number and changes question.
function medRound(){

    next.addEventListener("click", () => {
        displayMedQuestion();
        gameBox.style.backgroundColor = "rgb(174, 46, 212)"
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`)
        endMedGame();
    })
}


// Manipulates the DOM after 10 rounds is reached to display score card
function endMedGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.id = "finish"
        let finish = document.getElementById("finish")
        finish.addEventListener("click", () =>{
            for(let i = 0; i < 4; i++){
                let hideButtons = document.getElementsByClassName("answer");
                hideButtons[i].style.visibility = "hidden"
                hideButtons[i].style.height = "0vh"
            }
            
            for(let i = 0; i < 3; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(58, 3, 70), rgb(173, 16, 194))"
                scoreCard[i].style.color = "white"
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

//function to display country and relative citys all in random order, then removes called array.
function displayHardQuestion(){
    
    let randomise = Math.floor(Math.random() * hardCountrys.length )
    currentHardQuestion = hardCountrys[randomise]

    hardCountrys.splice(randomise, 1)

    let displayCountry = document.getElementById("country");
    displayCountry.innerHTML = currentHardQuestion.country;

     //credited to sebhastian.com
    currentHardQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentHardQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentHardQuestion.citys[i]
    }
}


//Add eventlistener to all buttons and if the right button is selected change background color and increase score.
function hardChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentHardQuestion.capital == currentHardQuestion.citys[i]){
                buttons[i].id = "correct"
                if(buttons[i].id === "correct"){
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`)
                    gameBox.style.backgroundColor = "green"
                    buttons[i].disabled = true;
                }
                }else{
                    gameBox.style.backgroundColor = "red"
                    buttons[i].id = "wrong"
                    buttons[i].disabled = true;
                }
            })  
        }   
    }    


// Adds event listener that increases round number and changes question.
function hardRound(){

    next.addEventListener("click", () => {
        displayHardQuestion();
        gameBox.style.backgroundColor = "rgba(172, 20, 20, 0.993)"

        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`)
        endHardGame();
    })
}


// Manipulates the DOM after 10 rounds is reached to display score card
function endHardGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.id = "finish"
        let finish = document.getElementById("finish")
        finish.addEventListener("click", () =>{
            for(let i = 0; i < 4; i++){
                let hideButtons = document.getElementsByClassName("answer");
                hideButtons[i].style.visibility = "hidden"
                hideButtons[i].style.height = "0vh"
            }

            for(let i = 0; i < 3; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(73, 13, 13), rgba(153, 6, 6))"
                scoreCard[i].style.color = "white"
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
            let random = Math.floor(Math.random() * hardFacts.length)
            funFacts = hardFacts[random]
            fun.innerHTML = funFacts.fact
        })
    }
}