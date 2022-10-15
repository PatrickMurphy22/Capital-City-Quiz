let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/15`)

let currentQuestion;

// List of EASY countrys in array format
const easyCountrys= [
    {
        country:("England"),
        citys:["London","Liverpool","Manchester","Newcastle"],
        capital:("London")
    },
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

function easyGame(){
    randomQuestion();
    displayQuestion();
    playerPick();
    nextRound();
}

function randomQuestion(){
    let randomiseCountry = easyCountrys[Math.floor(Math.random() * easyCountrys.length )]
    return randomiseCountry
}

function displayQuestion(){

    currentQuestion = randomQuestion();
    let displayCountry = document.getElementById("easy-country");
    displayCountry.innerHTML = currentQuestion.country;

    easyCountrys
     //credited to sebhastian.com
    currentQuestion.citys.sort(function () {
        return Math.random() - 0.5;
      });

    for(let i = 0; i < currentQuestion.citys.length; i++){
        let displayCitys = document.getElementsByClassName("ans");
        displayCitys[i].innerHTML = currentQuestion.citys[i]
    }
}

function playerPick(){
    displayQuestion();
    
    let buttons = document.getElementsByClassName("easyAnswer");
    for(let i = 0; i < 4; i++){
        buttons[i].addEventListener("click", ()=> {
            if(currentQuestion.citys[i] === currentQuestion.capital){
                console.log(`${currentQuestion.citys[i]} is Correct`)
            }else{
                console.log(`${currentQuestion.citys[i]} is Wrong`)
            }
        });
    }

    console.log(currentQuestion)
}


function nextRound(){

    let next = document.getElementById("next");
    next.addEventListener("click", () => {
        playerPick();
            round++;
            document.getElementById("round").innerHTML = (`Round: ${round}/15`)
            if(round === 15){
                console.log("GAME OVER")
            }
    })
}

easyGame();