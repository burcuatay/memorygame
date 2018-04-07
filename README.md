# Memory Game Project

## Table of Contents

* [Project Intro] (#project intro)
* [Instructions](#instructions)
* [Contributing](#contributing)
* [Features] (#features)


## Project Intro
The Memory Game project is a part of the Udacity Front End Development Nanodegree programme. It is one of the requirements to acquire the degree. 

## Instructions
To launch the code, you need a _browser_. No other installations will be necessary.

To play the game,launch the code in your browser. The _timer_ will begin automatically. Click two cards. If they match, they will turn green. If not, they will close. The aim of the game is to match the cards as soon as possible. 

The _star rating_ goes down, as the user opens more cards.

## Contributing
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).


## Features

### Star Rating:
Star Rating is a 3 star rating system that empties out the stars as the user clicks on more cards. This is done by changing the class name of the stars from `"fa fa-star"` to `"fa fa-star-o"`. 

### Timer:
The timer starts counting the seconds as the user launches the game. It stops when all the card class names are `card match`. The seconds are then added to the Win Message (`winMsg`).

### Move Counter:
It counts the number of clicks the user has done on the cards. The number of moves are then added to the Win Message (`winMsg`).

### Refresh Button:
Allows user to refresh the game and start again. It uses the `initialize` function. 

### Card Deck:
Shuffles itself as a new game starts. This is also done through the `initialize` function. 





