/*
 * Create a list that holds all of your cards
 */

var deck = document.querySelectorAll('.card');
var newArray = Array.from(deck);


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
};

//If the card is clicked, the card's symbol is being displayed
function styChange(e){
    e.target.className = 'card show open';
};

//Put cards on a list
var openCards = document.getElementsByClassName('card show open');



//this if statement works! - checks if the two cards are the same and 
//sets the right className attribute accordingly
if(openCards["0"].children["0"].className == openCards["1"].children["0"].className){
    openCards[1].className = "card match";
	openCards[0].className = "card match";
    }
   else {
        openCards[1].className = "card";
		openCards[0].className = "card"
    }


// Close cards if there is no match
// Lock cards in open position if there is a match

/*if(openCards[0] == openCards[1]){
    openCards.className = "card match"
    }
   else {
        openCards.className = "card"
    };*/