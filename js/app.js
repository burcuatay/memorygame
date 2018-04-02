/*
 * Create a list that holds all of your cards
 */

var deck = document.querySelectorAll('.card');
var newArray = Array.from(deck);

/*
newArray.forEach(function classCheck (i){
    if (newArray[i].className == "card match") {
        newArray.remove(i)
    }
});


/*var closeCards = newArray.map(function(i){
    remove(document.getElementsByClassName('card match'))
});
*/

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//Shuffle the list of cards using the provided "shuffle" method above
newArray = shuffle(newArray)

// Loop through each card and create its HTML
// Add each card's HTML to the page
var burcuUl = document.getElementById('deck');
newArray.forEach(function(elm) {
    burcuUl.appendChild(elm);
});



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */




//Set up the event listener for each card
for (var i = 0; i < newArray.length; i++) {
    newArray[i].addEventListener('click', styChange);
    }

//If the card is clicked, the card's symbol is being displayed
// Runs match check if there are two cards
var self = this;
function styChange(e){
    e.target.className = 'card show open';
    self.openCards = document.getElementsByClassName('card show open');
    if(self.openCards && self.openCards.length == 2) {
        self.openCards = matchCheck(self.openCards)
    };
    
};

//Put cards on a list

var matchedCards = document.getElementsByClassName('card match');
var matchedArray = Array()

// Creates delay
var myVar
function myFunc(){
    myVar = setTimeout(matchCheck, 3000);
}

// Checks if the cards match and changes class names accordingly - with 1 sec delay
function matchCheck(cards) {
    setTimeout(function myFunc(){
    var opCards = cards
    if(opCards[1] && opCards["0"].children["0"].className == opCards["1"].children["0"].className){
        opCards[1].className = "card match";
        opCards[0].className = "card match";
        matchedArray.push(matchedCards);
        }
        else {
            opCards[1].className = "card";
            opCards[0].className = "card";
        }}, 1000);
};

var e = 0;
var cardName = Array()

function nameAdd(){
    if (matchedCards[1]){
    cardName.push(matchedCards[matchedCards.length -1].children["0"].className)
}};

cardName = nameAdd(cardName);








/*
e = matchedCards.length -1;
matchedCards[e].children["0"].className;
*/

/*
var burcuUl = document.getElementById('deck');
newArray.forEach(function(elm) {
    burcuUl.appendChild(elm);
});
*/

//This doesn't work meh :( 
//openCards[i].removeEventListener('click', styChange);

/*function onlyTwo(){
    var openCards = self.openCards
    if(self.openCards.length > 2){

    }
}
*/

/* 
*  1. Stop the cards going back to blue after they have become green (matched)
*  2. Stop adding more than 2 cards to the openCards deck
*/


