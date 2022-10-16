let round = 1;
document.getElementById("round").innerHTML = (`Round: ${round}/10`)

let score = 1;
document.getElementById("score").innerHTML = (`Sore: ${score}/10`)

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
    displayQuestion();
    playerPick();
    nextRound();
}


function displayQuestion(){
    
    let randomise = Math.floor(Math.random() * easyCountrys.length )
    currentQuestion = easyCountrys[randomise]

    easyCountrys.splice(randomise, 1)

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
            if(currentQuestion.capital === currentQuestion.citys[i]){
                console.log(`${currentQuestion.citys[i]} is Correct`)
                score++;
                document.getElementById("score").innerHTML = (`Sore: ${score}/10`)
                buttons[i].style.backgroundColor = "green"
                document.body.style.backgroundColor = "green"
                buttons[i].style.color = "white"
            }else{
                console.log(`${currentQuestion.citys[i]} is Wrong`)
                buttons[i].style.backgroundColor = "red"
                document.body.style.backgroundColor = "red"
                buttons[i].style.color = "white"
            }
        });
    }
}


function nextRound(){

    let next = document.getElementById("next");
    next.addEventListener("click", () => {
        displayQuestion();
            round++;
            document.getElementById("round").innerHTML = (`Round: ${round}/10`)
            if(round === 1){
                console.log("GAME OVER")
                document.getElementById("easy-body").className = "hide"
            }
    })
}

easyGame();