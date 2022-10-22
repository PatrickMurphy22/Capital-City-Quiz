// Add variables containing HTML elements.
let header = document.getElementById("header");
let result = document.getElementById("result");
let answers = document.getElementsByClassName("answer");
let next = document.getElementById("next");
let scoreContainer = document.getElementById("score-container");
let scoreBox = document.getElementById("score-box");
let scoreCard = document.getElementsByClassName("score-card");
let answerContainer = document.getElementById("answer-container");
let qBox = document.getElementById("question-box");
let gameMode = document.getElementById("game-mode");
let difficultyMode = document.getElementById("difficulty-modes");
let easyMode = document.getElementById("easy-container");
let medMode = document.getElementById("medium-container");
let hardMode = document.getElementById("hard-container");
let fun = document.getElementById("fun-fact");
let displayCountry = document.getElementById("country");
let whatIs = document.getElementById("what-is");
let finalScore = document.getElementById("final-score");

// Add ROUND variable and set to 1.
let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`);

// Add SCORE variable and set to 1.
let score = 0;
document.getElementById("score").innerHTML = (`Score: ${score}/10`);

// Set variables to undefined to use throught code.
let currentQuestion;
let funFacts;
let quiz;
let insults;

// Quiz arrays, Insults arrays & facts arrys.
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
];

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
];

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

];

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
        insult: ("Bears Beets, Battle Star Galactica")
    },
    {
        insult: ("You're so charming when you make an effort.")
    },
    {
        insult: ("If I throw a stick, will you leave?")
    },
    {
        insult: ("It's impossible to underestimate you.")
    },
    {
        insult: ("I'm not insulting you; I'm describing you.")
    },
    {
        insult: ("A titanic, in a world full of icebergs.")
    },
    {
        insult: ("Easy now, don't let your brains go to your head.")
    },
    {
        insult: ("When you start talking, I stop listening.")
    },
    {
        insult: ("I told my therapist about you.")
    },
];

const insultsWrong = [
    {
        insult: ("You remind me of Kevin from the Office.")
    },
    {
        insult: ("One, Two, you havent a clue.")
    },
    {
        insult: ("You have a walnut sized brain.")
    },
    {
        insult: ("Do you even know the number for 999??")
    },
    {
        insult: ("Why are you wasting my time.")
    },
    {
        insult: ("You make Forrest Gumps IQ look High.")
    },
    {
        insult: ("You're the Toby to my Michael Scott.")
    },
    {
        insult: ("Well that was silly.")
    },
    {
        insult: ("I expected nothing, but I'm still disappointed.")
    },
    {
        insult: ("You're about as sharp as a sack full of soup.")
    },
    {
        insult: ("Well, you smell like hot dog water.")
    },
    {
        insult: ("You're the reason we have warning labels.")
    },
    {
        insult: ("You're 12 cans short of a six-pack.")
    },
    {
        insult: ("Proof that evolution can go in reverse")
    },
    {
        insult: ("I envy everyone you have never met.")
    },
    {
        insult: ("If you spoke your mind, you'd be speechless.")
    },
];

const facts = [
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
];

// Funtion that resets header after player presses next. 
function resetHeader(){
    header.style.color = "white";
    header.style.fontSize = "30px";
    header.innerHTML = "Capital Quiz";
    whatIs.innerHTML = "-What is the capital of-";
}


// Functions that occurs when correct or the wrong answer is selected by the player.
function correctChoice(){
    header.style.backgroundColor = "rgb(19, 66, 27)";
    header.innerHTML = "-CORRECT-";
    header.style.fontSize = "30px";
    gameMode.style.backgroundColor = "green";
}

function wrongChoice(){
    header.style.backgroundColor = "rgb(77, 2, 2)";
    header.innerHTML = "-WRONG-";
    header.style.fontSize = "30px";
    gameMode.style.backgroundColor = "red";
}

// Adds event listener to Header when player is playing the quiz. 
function selectionMenu(){
    header.addEventListener("click", () => {
        location.href ="index.html";
    });
}


// Function that maniuplates the DOM and displays the quiz game. 
function displayGame(){
    header.style.color = "white";
    qBox.style.height = "20vh";
    scoreBox.style.height = "8vh";
    scoreBox.style.marginTop = "20px";
    for(let i = 0; i < answers.length; i++){
        answers[i].style.height = "7vh";
    }
    difficultyMode.remove();
    gameMode.style.visibility = "visible";
    gameMode.style.height = "90vh";
}


//Functions that contains other functions allowing each mode to be played.
function easyGame(){
    displayEasyQuestion();
    playerChoice();
    endEasyGame();
}

function mediumGame(){
    displayMedQuestion();
    playerChoice();
    endMedGame();
}

function hardGame(){
    displayHardQuestion();
    playerChoice();
    endHardGame();
}


//Function that displays random Country along with the options for that city.
function generateRandomQuestions(){
        
    let randomise = Math.floor(Math.random() * quiz.length );
    currentQuestion = quiz[randomise];

    quiz.splice(randomise, 1);

    
    displayCountry.innerHTML = currentQuestion.country;

     //credited to sebhastian.com
    currentQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentQuestion.citys[i];
    }
}


//Functions to randomly displays Country and City for Easy/Medium/Hard difficulties
function displayEasyQuestion(){
    quiz = easyCountrys;
    easyMode.addEventListener("click", () =>{
        displayGame();
        easyGame();
        easyRound();
        for(let i = 0; i < scoreCard.length; i++){
            scoreCard[i].style.background = "linear-gradient(to right, rgb(21, 87, 111), rgb(8, 216, 216))";
        }
        gameMode.style.backgroundColor = "rgb(0, 222, 230)";
        header.style.backgroundColor = "rgb(21, 87, 111)";
    });
    generateRandomQuestions();
}

function displayMedQuestion(){
    quiz = mediumCountrys;
    medMode.addEventListener("click", () =>{
        displayGame();
        mediumGame();
        medRound();
        for(let i = 0; i < scoreCard.length; i++){
            scoreCard[i].style.background = "linear-gradient(to right, rgb(58, 3, 70), rgb(173, 16, 194))";
        }
        gameMode.style.backgroundColor = "rgb(174, 46, 212)";
        header.style.backgroundColor = "rgb(97, 30, 94)";
    });

    generateRandomQuestions();
}

function displayHardQuestion(){
    quiz = hardCountrys;
    hardMode.addEventListener("click", () =>{
        displayGame();
        hardGame();
        hardRound();
        for(let i = 0; i < scoreCard.length; i++){
            scoreCard[i].style.background = "linear-gradient(to right, rgb(73, 13, 13), rgba(153, 6, 6))";
        }
            gameMode.style.backgroundColor = "rgba(180, 6, 6)";
            header.style.backgroundColor = "rgb(100, 10, 10)";
    });
    generateRandomQuestions();
}


// function to disable buttons.
function disableAnswers(){
    for (let i = 0; i < 4; i++){
        answers[i].disabled = true;
    }
}


// Function that adds eventlistener to all answers on Easy/Medium/Hard difficulties, if capital selected score increases by one.
function playerChoice(){

    for(let i = 0; i < 4; i++){
        answers[i].addEventListener("click", () => {
            if(currentQuestion.capital == currentQuestion.citys[i]){
                    answers[i].id = "correct";
                    score++;
                    document.getElementById("score").innerHTML = (`Score: ${score}/10`);
                    displayCountry.innerHTML = ``;
                    correctInsults();
                    disableAnswers();
                    correctChoice();
                }else{
                    displayCountry.innerHTML = `Answer: ${currentQuestion.capital}`;
                    answers[i].id = "wrong";
                    disableAnswers();
                    wrongChoice();
                    wrongInsults();
                }
            });
        }   
}


// Function to reable buttons.
function reableAnswers(){
    for (let i = 0; i < 4; i++){
        answers[i].disabled = false;
        answers[i].removeAttribute("id");
    }
}


//Functions that display random insults wether player is right or wrong
function correctInsults(){
    let random = Math.floor(Math.random() * insultsCorrect.length);
    insults = insultsCorrect[random];
    whatIs.innerHTML = insults.insult;
}

function wrongInsults(){
    let random = Math.floor(Math.random() * insultsWrong.length);
    insults = insultsWrong[random];
    whatIs.innerHTML = insults.insult;
}


// Functions that adds event listeners to next that increases ROUND and calls other relevent functions.
function easyRound(){

    next.addEventListener("click", () => {
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        displayEasyQuestion();
        resetHeader();
        reableAnswers();
        endEasyGame();
        header.style.backgroundColor = "rgb(21, 87, 111)";
        gameMode.style.backgroundColor = "rgb(0, 222, 230)";
    });
}

function medRound(){

    next.addEventListener("click", () => {
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        displayMedQuestion();
        resetHeader();
        reableAnswers();
        endMedGame();
        header.style.backgroundColor = "rgb(97, 30, 94)";
        gameMode.style.backgroundColor = "rgb(174, 46, 212)";
    });
}

function hardRound(){

    next.addEventListener("click", () => {
        round++;
        document.getElementById("round").innerHTML = (`Round: ${round}/10`);
        displayHardQuestion();
        resetHeader();
        reableAnswers();
        endHardGame();
        header.style.backgroundColor = "rgb(100, 10, 10)";
        gameMode.style.backgroundColor = "rgba(153, 6, 6)";
    });
}


//Function that removes DOM elements when certain threshold is met.
function endGameDom(){
    document.querySelector(".next").style.visibility = "hidden";
    scoreContainer.removeAttribute("hidden");
    scoreBox.remove();
    qBox.remove();
}

// Functions that changes text of next button then adds eventlistener to remove 4 buttons.
function gameOver(){
    if(round === 10){
        next.innerHTML = "Finish";
        next.addEventListener("click", () =>{
            for(let i = 0; i < answers.length; i++){
                answers[i].style.visibility = "hidden";
                answers[i].style.height = "0vh";
            }
            endGameDom();
        });
    }
}

//Fun Facts in Array format to dispaly at end of Easy/Medium/Hard difficulties
function randomFacts(){
    
    let random = Math.floor(Math.random() * facts.length);
    funFacts = facts[random];

    fun.innerHTML = funFacts.fact;
}


//Functions that displays players score, comment and random fact.
function endEasyGame(){
    gameOver();
    randomFacts(); 
    finalScore.innerHTML = score;
    if(score < 5 ){
        result.innerHTML = "Do you even know where your house is??";
    }else if(score <= 7 ){
        result.innerHTML = "You're far from a globe trotter, but you're getting there";
    }else{
        result.innerHTML = "Not bad, maybe you are ready to take the next step...";
    }
}

function endMedGame(){
    gameOver();   
    randomFacts(); 
    finalScore.innerHTML = score;
    if(score < 5 ){
       result.innerHTML = "LOL, I suppose you think Africa is a country??";
    }else if(score <= 7 ){
        result.innerHTML = "They didn't lie when they said you're average at best..";
    }else{
        result.innerHTML = "Okay then, maybe you are not an idiot after all";
    }
}

function endHardGame(){
    gameOver(); 
    randomFacts(); 
    finalScore.innerHTML = score;
    if(score < 5 ){
        result.innerHTML = "Ha Ha Ha I knew it.. Pathetic effort to be say the least...";
    }else if(score <= 7 ){
        result.innerHTML = "So so so close, maybe 20 more attempts and you'll get there.";
    }else{
        result.innerHTML = "Congrats, you have endless amounts of useless knowledge.";
    }
}

selectionMenu();
displayEasyQuestion();
displayMedQuestion();
displayHardQuestion();