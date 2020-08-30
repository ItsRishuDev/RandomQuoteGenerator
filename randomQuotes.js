let beginningRandom = Math.floor(Math.random() * 10)
let middleRandom = Math.floor(Math.random() * 10)
let endRandom = Math.floor(Math.random() * 10)

let beginningQuote = ['Journey', 'Enjoyment', 'Movies', 'Happiness', 'Fun', 'Quotes', 'Adventure', 'Travel', 'Games', 'Music'];
let middleQuote = ['was designed by', 'was introduced with', 'is like', 'is a flavour in', 'is released with', 'is your', 'is important for', 'describes','released', 'is much better for'];
let endQuote = ['life', 'ourself', 'experience', 'enjoyment', 'friend', 'love', 'emotion', 'creation', 'you', 'experties'];


//document.getElementById('generate'),addEventListener('click', generate);

function generate() {
    document.getElementById('quote').innerHTML = beginningQuote[beginningRandom] + ' ' + middleQuote[middleRandom] + ' ' + endQuote[endRandom] + '.';
}