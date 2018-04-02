/*
 * Create a list that holds all of your cards
 */
var self = this;
var deck = document.querySelectorAll('.card');
var newArray = Array.from(deck);
var matchedArray = [];
var matchedCards = document.getElementsByClassName('card match');
var openCards = document.getElementsByClassName('card show open');

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
// Loop through each card and create its HTML
// Add each card's HTML to the page



function initialaze(){
    self.newArray = shuffle(newArray);
    var burcuUl = document.getElementById('deck');
    self.newArray.forEach(function(elm) {
        elm.className = 'card close'
        burcuUl.appendChild(elm);
    });
}
initialaze()
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

document.getElementById('deck').addEventListener('click', styChange);


//If the card is clicked, the card's symbol is being displayed
// Runs match check if there are two cards

function styChange(e){
    if (e.target.id === 'deck' ||
    e.target.className.includes('open') ||
    e.target.className.includes('match')
) {
        return e.preventDefault();
    } 
    e.target.className = 'card show open';
    self.openCards = document.getElementsByClassName('card show open');
    if(self.openCards && self.openCards.length >= 2) {
       ifMatch(self.openCards, e);
    } 
};

/*function counter (){
    var count = 0;
    var moves = document.getElementById("moves");
    if (moves) moves.innerHTML = ++count;
};*/


// Checks if the cards match and changes class names accordingly - with 0,5 sec delay
function ifMatch(cards, event) {
setTimeout(function myFunc(){
    var opCards = cards
    if(opCards && opCards[0].children[0].className == opCards[1].children[0].className){
        opCards[1].className = "card match";
        opCards[0].className = "card match";
        return true;
        } else {
            if(cards.length >= 2) {
                self.deck.forEach(function(elm) {
                    if(elm.className.includes('open'))
                    elm.className = 'card close'
                }
            );
            } else {
                event.target.className = 'card show open'
            }
        
        }
},500 )
};


if (matchedArray.length == 8){
    function win(){
        
        }
};

// Makes restart button work
document.getElementById('restart').addEventListener('click', initialaze);



/* 
*  1. Counter currently only counts the first click
*  2. Display winning message
*/


