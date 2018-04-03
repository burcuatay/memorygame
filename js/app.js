/*
 * Create a list that holds all of your cards
 */
var self = this;
var deck = document.querySelectorAll('.card');
var newArray = Array.from(deck);
var matchedCards = document.getElementsByClassName('card match');
var openCards = document.getElementsByClassName('card show open');
var moves = document.getElementById("moves");
var stars = document.getElementById("stars");
var uls = document.getElementsByTagName('ul');
const winMsg = document.createElement('div')

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


function initialize(){
    self.newArray = shuffle(newArray);
    var burcuUl = document.getElementById('deck');
    self.newArray.forEach(function(elm) {
        elm.className = 'card close'
        burcuUl.appendChild(elm);
    });
    moves.innerHTML = "0";
    uls[0].children[0].firstChild.className = "fa fa-star";
    uls[0].children[1].firstChild.className = "fa fa-star";
    uls[0].children[2].firstChild.className = "fa fa-star";
    winMsg.style.display = 'none';
};
initialize()


//Set up the event listener for each card

document.getElementById('deck').addEventListener('click', styChange);


//If the card is clicked, the card's symbol is being displayed
// Runs match check if there are two cards

function styChange(e){
    //prevents event listener if the card is already open or matched
    if (e.target.id === 'deck' ||
    e.target.className.includes('open') ||
    e.target.className.includes('match')
) {
        return e.preventDefault();
    } 
    // opens cards when clicked
    // if there are two open cards - checks for a match
    e.target.className = 'card show open';
    self.openCards = document.getElementsByClassName('card show open');
    if(self.openCards && self.openCards.length >= 2) {
       ifMatch(self.openCards, e);
    } 
    // adds counter
    moves.innerHTML = add();
    // runs star rating function
    starRating();
};


// Counter function
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();


// Checks if the cards match and changes class names accordingly - with 0,5 sec delay
function ifMatch(cards, event) {
setTimeout(function myFunc(){
    var opCards = cards
    if(opCards && opCards[0].children[0].className == opCards[1].children[0].className){
        opCards[1].className = "card match";
        opCards[0].className = "card match";
        if (matchedCards.length == 16){winMessage()};
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

// Makes restart button work
document.getElementById('restart').addEventListener('click', initialize);


// Winning Message --> appends to the wrong div. Should append to the ul#deck
function winMessage(){
    winMsg.textContent = 'You win in ' + moves.innerHTML + ' moves!';
    var currentDiv = document.getElementById("container");
    document.body.insertBefore(winMsg, currentDiv);
    winMsg.style.cssText = 'display: inherit;position: absolute;z-index: 2;padding-top: 300px;padding-left: 150px;font-size: 5em;text-align: center;padding-right: 150px;padding-bottom: 300px;'  
    var refreshHTML = '<div class="restartGame" id="restartGame"> <i class="fa fa-repeat"></i> </div>';
    winMsg.insertAdjacentHTML('beforeend', refreshHTML);
    document.getElementById('restartGame').addEventListener('click', initialize);
};


// Empties out stars as user makes more moves
function starRating(){
    if (moves.innerHTML > 10 && moves.innerHTML <= 15){
        uls[0].children[0].firstChild.className = "fa fa-star-o"
    } else if (moves.innerHTML > 15 && moves.innerHTML <20) {
        uls[0].children[1].firstChild.className = "fa fa-star-o"
    } else if (moves.innerHTML >= 20) {
        uls[0].children[2].firstChild.className = "fa fa-star-o"
    }
    else {
    }
};


/* 
*
*  2. Display winning message
*/


