let morequotes = [];

function randomNumber(length){
    randomNum = Math.floor(Math.random() * length);
    return randomNum;
}

let musicQuotes = ['Music', 'Sound', 'Song', 'Artist', 'Instrument', 'Music', 'Tunes', 'Melody', 'Music', 'Tones'];
let travelQuotes = ['Travel', 'Journey', 'Destination', 'Trip', 'Tour', 'Trek', 'Hike', 'Journey', 'Ride', 'Safari']; 
let midQuote = ['was designed by', 'was introduced with', 'is developed for', 'is a flavour in', 'is released with', 'is your', 'is important for', 'describes','released', 'is like'];
let lastQuote = ['life', 'ourself', 'experience', 'enjoyment', 'friend', 'love', 'emotion', 'creation', 'you', 'experties'];

function moreQuotes(){
    let noOfQuotes = document.getElementById('quotesNo').value;
    let quoteType = document.getElementById('quoteType').value;
    console.log(quoteType);
    if (quoteType == 1){
        for(let i=0; i<noOfQuotes; i++){
            morequotes.push('<br>' + musicQuotes[randomNumber(musicQuotes.length)] + ' ' + midQuote[randomNumber(midQuote.length)] + ' ' + lastQuote[randomNumber(lastQuote.length)] );
        }
        document.getElementById('quotesAll').innerHTML = morequotes;
    }
    else{
        for(let i=0; i<noOfQuotes; i++){
            morequotes.push('<br>' + travelQuotes[randomNumber(travelQuotes.length)] + ' ' + midQuote[randomNumber(midQuote.length)] + ' ' + lastQuote[randomNumber(lastQuote.length)]);
        }
        document.getElementById('quotesAll').innerHTML = morequotes;
    }
    morequotes = [];
}


