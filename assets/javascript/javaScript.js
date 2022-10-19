// added DOM to variables to use throughout code
let finalScore = document.getElementById("final-score");
let result = document.getElementById("title");
let buttons = document.getElementsByClassName("answer");
let hideButtons = document.getElementsByClassName("answer");
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
let fun = document.getElementById("fun-fact");
let displayCountry = document.getElementById("country");
let whatIs = document.getElementById("what-is");

// Add ROUND variable and set to 1.
let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`);

// Add SCORE variable and set to 1.
let score = 0;
document.getElementById("score").innerHTML = (`Score: ${score}/10`);

// Set variables to undefined to use throught code.
let currentEasyQuestion;
let currentMedQuestion;
let currentHardQuestion;
let funFacts;

// functions to alter DOM if Correct or Wrong choice slected then restore after use.
function resetRound(){
    header.style.color = "white";
    header.style.fontSize = "30px"
    header.innerHTML = "Capital Quiz"
    whatIs.innerHTML = "-What is the capital of-"
}

function correctChoice(){
    header.style.backgroundColor = "rgb(19, 66, 27)"
    header.innerHTML = "-CORRECT-"
    header.style.fontSize = "30px"
    gameBox.style.backgroundColor = "green";
}

function wrongChoice(){
    header.style.backgroundColor = "rgb(77, 2, 2)"
    header.innerHTML = "-WRONG-"
    header.style.fontSize = "30px"
    gameBox.style.backgroundColor = "red";
}

function selectionMenu(){

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.height = "0vh";
    }
    qBox.style.height = "0vh";
    scoreBox.style.height = "0vh";
    answerContainer.style.height = "0vh";
    gameBox.style.height = "0vh";
    header.addEventListener("click", () => {
        location.href ="index.html"
    })
};

function endGameDom(){
    document.querySelector(".next").style.visibility = "hidden";
    qBox.style.visibility = "hidden";
    qBox.style.height = "0vh";
    scoreContainer.removeAttribute("hidden");
    scoreBox.style.height = "0vh";
    scoreBox.style.visibility = "hidden";
    answerContainer.style.height = "35vh";
}

function displayGame(){
    header.style.color = "white";
    qBox.style.height = "20vh";
    scoreBox.style.height = "8vh";
    scoreBox.style.marginTop = "20px";
    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.height = "7vh";
    }
    difficultyMode.style.visibility = "hidden";
    difficultyMode.style.height = "0vh";
    gameBox.style.visibility = "visible";
    gameBox.style.height = "90vh";
}

//Adds event listeners to start Easy/Medium/Hard Mode
easyMode.addEventListener("click", () =>{
    displayGame()
    gameBox.style.backgroundColor = "rgb(0, 222, 230)";
    header.style.backgroundColor = "rgb(21, 87, 111)";
    easyGame();
});


medMode.addEventListener("click", () =>{
    displayGame()
    gameBox.style.backgroundColor = "rgb(174, 46, 212)";
    header.style.backgroundColor = "rgb(97, 30, 94)";
    mediumGame();
});


hardMode.addEventListener("click", () =>{

    displayGame()
    gameBox.style.backgroundColor = "rgba(180, 6, 6)";
    header.style.backgroundColor = "rgb(100, 10, 10)";
    hardGame();
});

// List of Easy/Medium/Hard countries in array format.
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
    {
        country:("Netherlands"),
        citys:["Amsterdam","Rotterdam","Utrecht","Eindhoven"],
        capital:("Amsterdam")
    },
    {
        country:("Portugal"),
        citys:["Lisbon","Porto","Braga","Madeira"],
        capital:("Lisbon")
    },
    {
        country:("Russia"),
        citys:["Moscow","St. Petersburg","Belgorod","Kazan"],
        capital:("Moscow")
    },
    {
        country:("Denmark"),
        citys:["Copenhagen","Aarhus","Odense","Aalborg"],
        capital:("Copenhagen")
    },
    {
        country:("Belgium"),
        citys:["Brussels","Bruges","Antwerp","Ghent"],
        capital:("Brussels")
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
        country:("India"),
        citys:["New Delhi","Mumbai","Kolkata","Chennai"],
        capital:("New Delhi")
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
        country:("Eygpt"),
        citys:["Cairo","Alexandira","Giza","Suez"],
        capital:("Cairo")
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
    {
        country:("Arab Emirates"),
        citys:["Abu Dhabi","Dubai","Sharjah","Qatar"],
        capital:("Abu Dhabi")
    },
    {
        country:("Argentina"),
        citys:["Buenos Aires","Mendoza","Salta","Rosario"],
        capital:("Buenos Aires")
    },
    {
        country:("Canada"),
        citys:["Ottawa","Montreal","Vancouver","Toronto"],
        capital:("Ottawa")
    },
    {
        country:("Turkey"),
        citys:["Ankara","Istanbul","Izmir","Bursa"],
        capital:("Ankara")
    },
    {
        country:("Switzerland"),
        citys:["Bern","Zurich","Geneva","Basel"],
        capital:("Bern")
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
    {
        country:("Nigeria"),
        citys:["Abjua","Lagos","Kano","Uyo"],
        capital:("Abjua")
    },
    {
        country:("Tanzania"),
        citys:["Dodoma","Zanzibar","Kilimanjaro","Der es Salaam"],
        capital:("Dodoma")
    },
    {
        country:("Greenland"),
        citys:["Nuuk","Paamiut","Attu","Arsuk"],
        capital:("Nuuk")
    },
    {
        country:("Papua New Guinea"),
        citys:["Port Moresby","Batua","Tari","Lae"],
        capital:("Port Moresby")
    },
    {
        country:("Fiji"),
        citys:["Suva","Nadi","Volivoli","Lautoka"],
        capital:("Suva")
    },

]

const insultsCorrect = [
    {
        insult: ("Everyone knows that")
    },
    {
        insult: ("Wow, you are so so amazing.. Not")
    },
    {
        insult: ("Lets see how long this lasts")
    },
    {
        insult: ("My 2 year old would of guessed that.")
    },
    {
        insult: ("Impressive, said no one ever..")
    },
    {
        insult: ("Another day, another lucky guess")
    },
    {
        insult: ("2 + 2 = 4, but im sure you knew that.")
    },
    {
        insult: ("Bears Beats, Battle Star Galactica")
    },
]

function correctInsults(){
    let random = Math.floor(Math.random() * insultsCorrect.length);
    insults = insultsCorrect[random];
    whatIs.innerHTML = insults.insult;
}

const insultsWrong = [
    {
        insult: ("You remind me of Kevin from the Office")
    },
    {
        insult: ("One, Two, you havent a clue")
    },
    {
        insult: ("You have a walnut sized brain")
    },
    {
        insult: ("Do you even know the number for 911??")
    },
    {
        insult: ("Why are you wasting my time")
    },
    {
        insult: ("You make Forrest Gumps IQ look High")
    },
    {
        insult: ("You're the Toby to my Michael Scott")
    },
    {
        insult: ("Well that was silly.")
    },
]

function wrongInsults(){
    let random = Math.floor(Math.random() * insultsWrong.length);
    insults = insultsWrong[random];
    whatIs.innerHTML = insults.insult;
}
//Fun Facts in Array format to dispaly at end of Easy/Medium/Hard difficulties
const easyFacts = [
    {
        fact: ("Japan expeiences 20% of the world's 6.0-magnitude or higher earthquakes")
    },
    {
        fact: ("Tokyo is the most populated city in the world, with more than 38 million people.")
    },
    {
        fact: ("Some say tea is life, British people reportedly drink 165 million cups of tea a day")
    },
    {
        fact: ("All of china is on beijing time despite geographically spanning over 5 time zones.")
    },
    {
        fact: ("Naples of course, is the birthplace of pizza ")
    },
    {
        fact: ("Believe it or not, there are no leprechauns in Ireland")
    },

]
function randomEasyFacts(){
    
    let random = Math.floor(Math.random() * easyFacts.length);
    funFacts = hardFacts[random];
    fun.innerHTML = funFacts.fact;

}
const mediumFacts = [
    {
        fact: ("Australia is the continent in the world to have no active volcanoes.")
    },
    {
        fact: ("New Zealand was the first self-governing nation to give women the right to vote in 1893.")
    },
    {
        fact: ("Alexandria in Egypt shares its name with Alexander the Great.")
    },
    {
        fact: ("It snows in the Sahara Desert.")
    },
    {
        fact: ("Iraq is responsible for the development of the oldest known writing system.")
    },
    {
        fact: ("Around 70 tribes with 30 various dialects reside in Kenya.")
    },

]
function randomMedFacts(){
    
    let random = Math.floor(Math.random() * mediumFacts.length);
    funFacts = hardFacts[random];
    fun.innerHTML = funFacts.fact;

}
const hardFacts = [
    {
        fact: ("Chad is branded as the Dead Heart of Africa.")
    },
    {
        fact: ("Mount Everest is bigger now than the last time it was measured.")
    },
    {
        fact: ("North Korea and Cuba are the only places you can't buy Coca-Cola.")
    },
    {
        fact: ("More than 52% of the world's population is under 30 years old.")
    },
    {
        fact: ("Around one in every 200 men are direct descendants of Genghis Khan.")
    },
    {
        fact: ("Toby Flenderson is the Scranton Strangler")
    },

]
function randomHardFacts(){  
    let random = Math.floor(Math.random() * hardFacts.length);
    funFacts = hardFacts[random];
    fun.innerHTML = funFacts.fact;

}

//Function that calls other funtions to play either Easy/Medium/Hard difficulties
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


//function to randomly displays Country and City for Easy/Medium/Hard difficulties
function displayEasyQuestion(){
    
    let randomise = Math.floor(Math.random() * easyCountrys.length );
    currentEasyQuestion = easyCountrys[randomise];

    easyCountrys.splice(randomise, 1);

    
    displayCountry.innerHTML = currentEasyQuestion.country;

     //credited to sebhastian.com
    currentEasyQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentEasyQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentEasyQuestion.citys[i];
    }
};

function displayMedQuestion(){
    
    let randomise = Math.floor(Math.random() * mediumCountrys.length );
    currentMedQuestion = mediumCountrys[randomise];

    mediumCountrys.splice(randomise, 1);

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

function displayHardQuestion(){
    
    let randomise = Math.floor(Math.random() * hardCountrys.length );
    currentHardQuestion = hardCountrys[randomise];

    hardCountrys.splice(randomise, 1);

    displayCountry.innerHTML = currentHardQuestion.country;

     //credited to sebhastian.com
    currentHardQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentHardQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentHardQuestion.citys[i];
    }
}


//Add eventlistener to all buttons on Easy/Medium/Hard difficulties, if capital selected score increases by one.
function easyChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentEasyQuestion.capital == currentEasyQuestion.citys[i]){
                    buttons[i].id = "correct"
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`);
                    buttons[i].disabled = true
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    correctInsults();
                    displayCountry.innerHTML = ``
                    correctChoice()
                }else{
                    displayCountry.innerHTML = `Answer: ${currentEasyQuestion.capital}`
                    buttons[i].id = "wrong"
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    wrongChoice();
                    wrongInsults();
                }
            })  
        }   
}

function medChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentMedQuestion.capital == currentMedQuestion.citys[i]){
                    buttons[i].id = "correct"
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`);
                    buttons[i].disabled = true
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    correctInsults();
                    displayCountry.innerHTML = ``
                    correctChoice()
                }else{
                    displayCountry.innerHTML = `Answer: ${currentMedQuestion.capital}`
                    buttons[i].id = "wrong"
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    wrongInsults();
                    wrongChoice();
                }
            })  
        }   
} 

function hardChoice(){
    
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", () => {
            if(currentHardQuestion.capital == currentHardQuestion.citys[i]){
                buttons[i].id = "correct"
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`);
                    buttons[i].disabled = true
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    correctInsults();
                    displayCountry.innerHTML = ``
                    correctChoice()
                }else{
                    displayCountry.innerHTML = `Answer: ${currentHardQuestion.capital}`
                    buttons[i].id = "wrong"
                    buttons[0].disabled = true;
                    buttons[1].disabled = true;
                    buttons[2].disabled = true;
                    buttons[3].disabled = true;
                    wrongInsults();
                    wrongChoice();
                }
            })  
        }   
}


// Adds event listener that increases round number and changes question for Easy/Medium/Hard difficulties
function easyRound(){

    next.addEventListener("click", () => {
        displayEasyQuestion();
        resetRound();
        header.style.backgroundColor = "rgb(21, 87, 111)";
        gameBox.style.backgroundColor = "rgb(0, 222, 230)";
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        endEasyGame();
    })
}

function medRound(){

    next.addEventListener("click", () => {
        displayMedQuestion();
        resetRound();
        header.style.backgroundColor = "rgb(97, 30, 94)";
        gameBox.style.backgroundColor = "rgb(174, 46, 212)";
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        endMedGame();
    })
}

function hardRound(){

    next.addEventListener("click", () => {
        displayHardQuestion();
        resetRound();
        header.style.backgroundColor = "rgb(100, 10, 10)";
        gameBox.style.backgroundColor = "rgba(153, 6, 6)";
        for(let i = 0; i < 4; i++){
            buttons[i].removeAttribute("id");
            buttons[i].disabled = false;
        }
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        endHardGame();
    })
}


// Manipulates the DOM after 10 rounds is reached to display score card for Easy/Medium/Hard difficulties
function endEasyGame(){

    if(round === 10){
        next.innerHTML = "Finish";
        next.addEventListener("click", () =>{
            for(let i = 0; i < hideButtons.length; i++){
                hideButtons[i].style.visibility = "hidden";
                hideButtons[i].style.height = "0vh";
            }

            for(let i = 0; i < scoreCard.length; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(21, 87, 111), rgb(8, 216, 216) )";
                scoreCard[i].style.color = "white";
            }

            endGameDom();
        
            finalScore.innerHTML = score;
            if(score < 5 ){
                result.innerHTML = "Do you even know where your house is??";
            }else if(score <= 7 ){
                result.innerHTML = "You're far from a globe trotter, but you're getting there";
            }else{
                result.innerHTML = "Not bad, maybe you are ready to take the next step...";
            };

            randomEasyFacts();
        })
    }
}

function endMedGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.addEventListener("click", () =>{
            for(let i = 0; i < hideButtons.length; i++){
                hideButtons[i].style.visibility = "hidden";
                hideButtons[i].style.height = "0vh";
            }
            
            for(let i = 0; i < scoreCard.length; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(58, 3, 70), rgb(173, 16, 194))";
                scoreCard[i].style.color = "white";
            }

            endGameDom();
            
            finalScore.innerHTML = score;
            if(score < 5 ){
                result.innerHTML = "LOL, I suppose you think Africa is a country??";
            }else if(score <= 7 ){
                result.innerHTML = "They didn't lie when they said you're average at best..";
            }else{
                result.innerHTML = "Okay then, maybe you are not an idiot after all";
            }

            randomMedFacts();
        })
    }
}

function endHardGame(){

    if(round === 10){
        next.innerHTML = "Finish"
        next.addEventListener("click", () =>{
            for(let i = 0; i < hideButtons.length; i++){
                hideButtons[i].style.visibility = "hidden";
                hideButtons[i].style.height = "0vh";
            }

            for(let i = 0; i < scoreCard.length; i++){
                scoreCard[i].style.background = "linear-gradient(to right, rgb(73, 13, 13), rgba(153, 6, 6))";
                scoreCard[i].style.color = "white";
            }
            
            endGameDom();

            finalScore.innerHTML = score;
            if(score < 5 ){
                result.innerHTML = "Ha Ha Ha I knew it.. Pathetic effort to be say the least...";
            }else if(score <= 7 ){
                result.innerHTML = "So so so close, maybe 20 more attempts and you'll get there.";
            }else{
                result.innerHTML = "Congrats, you have endless amounts of useless knowledge.";
            };

            randomHardFacts();
        })
    }
}

selectionMenu();