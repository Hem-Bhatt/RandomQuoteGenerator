

var select;
var stringtoadd;

function print(message)
{
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}


function RandomIndex(array)
{
  // function creates a random number from all the available array index values
  var randomiser = Math.floor(Math.random()*array.length);
  return randomiser;
}


// quotes object 
var quotes = [
  {quote: "You must be the change you wish to see in the world.", source: "Mahatma Gandhi" },
  {quote: "What's done is done", source: "William Shakespeare", citation:"Macbeth"},
  {quote: "Only I can change my life. No one can do it for me.", source: "Carol Burnett"},
  {quote: "Victory attained by violence is tantamount to a defeat, for it is momentary.", source: "Mahatma Gandhi", year: "1919"},
  {quote: "Every drop in the ocean counts.", source: "Yoko Ono"},
  {quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde"},
  {quote: "You too, Brutus?", source: "William Shakespeare", citation:"Julius Caesar", year:"1599"}
 ];


function getRandomQuote()
{
  // Selects and returns a random quote object
  select = RandomIndex(quotes);
  return quotes[select];
}


// Prints the Quote according to our desired format
function printQuote()
 {
  var value = getRandomQuote();
  stringtoadd = '<p class="quote">'+ value["quote"] +'</p>';
  stringtoadd += '<p class="source">'+ value["source"];
  if(value["citation"]!==undefined)
  {
    stringtoadd += '<span class="citation">' + value["citation"] + '</span>';
  }
  if(value["year"]!==undefined)
  {
    stringtoadd += '<span class="year">' + value["year"] + '</span>';
  }
  stringtoadd += '</p>';
  print(stringtoadd);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
