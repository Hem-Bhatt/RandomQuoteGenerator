var select;
var stringtoadd;
let alreadyShown = [];
const body = document.querySelector('body');


// Need to add other properties to the quotes object
var quotes = [
  {quote: "You must be the change you wish to see in the world.", source: "Mahatma Gandhi",tags:"Motivational" },
  {quote: "What's done is done", source: "William Shakespeare", citation:"Macbeth",tags:"Drama"},
  {quote: "Only I can change my life. No one can do it for me.", source: "Carol Burnett",tags:"Motivational"},
  {quote: "Victory attained by violence is tantamount to a defeat, for it is momentary.", source: "Mahatma Gandhi", year: "1919",tags:"Historical"},
  {quote: "Every drop in the ocean counts.", source: "Yoko Ono",tags:"Motivational"},
  {quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde",tags:"Motivational"},
  {quote: "You too, Brutus?", source: "William Shakespeare", citation:"Julius Caesar", year:"1599",tags:"Drama"}
 ];



const print = (message) =>
{
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}

// function creates a random number from 0 to length of the array
var RandomIndex =(array) => Math.floor(Math.random()*array.length);


// Selects and returns a random quote object if its not already displayed. once arrayCount is full it restarts again!
const getRandomQuote =()=>
{
 if(alreadyShown.length === quotes.length) // If all the quotes are shown
 {
   let lastQuote = alreadyShown[6]; //last randomvalue is pushed so that it's not repeated again!!
   alreadyShown = [lastQuote];     // Resets the alreadyShown array and pushes the last random value
 }
 let ranvalue = RandomIndex(quotes)
 while(alreadyShown.indexOf(ranvalue) !== -1){  // Will continue to select a random index until an available quote is found
  ranvalue = RandomIndex(quotes);
  }
    alreadyShown.push(ranvalue);
    return quotes[ranvalue];
 }

// Selects a random rgb color!
const randomColor=()=>{
  return ('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')');

}

 // Need to add, other properties
const printQuote = () =>
 {
  var value = getRandomQuote();
  stringtoadd = `<p class="quote"> ${value["quote"]}</p>`;
  stringtoadd += `<p class="source"> ${value["source"]}`;
  if(value["citation"]!==undefined)
  {
    stringtoadd += `<span class="citation">${value["citation"]}</span>`;
  }
  if(value["year"]!==undefined)
  {
    stringtoadd += `<span class="year">${value["year"]}</span>`;
  }
  stringtoadd += `</p>`;
  print(stringtoadd);
  body.style.background = randomColor();
}

setInterval(printQuote,30000);   // Change The quote every 30 seconds

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
