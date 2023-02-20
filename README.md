# Blackjack Blitz

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Technology](#technology)
* [Development](#development)
* [Github Repository](#github-repository)
* [Heroku Deployment](#heroku-deployment)
* [Screenshots](#screenshots)
* [Contributors](#contributors)
* [Demo Video](#demo-video)
* [Contact](#contact)

## Description
Blackjack Blitz is a web application using Node.js to create a multiplayer simulation of the traditional casino game, Blackjack.  The rules are the same as Blackjack and gives the user multiple options to choose from to enhance their gaming experience.  This is a multi-player game so multi users can login and play at the same time.

Data is stored in a SQL database on Heroku using Sequelize. 
## License
This source code is licensed under the MIT License.

## Installation
This is a web application so no installation is required.  Visit http://black-jack-blitz-test.herokuapp.com to register for an account to connect to the game server.

## Insomina Usage
```
POST /game: starts a new game of Blackjack by creating a new record in the "playtables" table, drawing two cards for the player and two cards for the dealer, and returning the game ID and the player's cards to the client.
POST /game/:gameId/hit: deals another card to the player's hand, and returns the new player cards to the client. If the player's hand value exceeds 21, the game ends and the dealer wins.
POST /game/:gameId/stand: the player stands and lets the dealer play their hand. The dealer's cards are revealed, and the dealer draws cards until their hand value is at least 17. The winner of the game is determined by comparing the player's and dealer's hands. If the dealer's hand value exceeds 21, the player wins.
PUT /game/:gameId/restart: restarts a game that has ended by resetting the "playtables" table record.
PUT /game/:gameId/end: ends a game that is currently in progress by setting the "is_active" flag to false and declaring the dealer the winner.
USE *: a catch-all route that returns a 404 Not Found error message for any other HTTP request.
```
## Technology
* Node.js
    * Express.js
    * Deck-Of-Cards.js
    * Sequelize.js
    * Echo.js
    * Jest.js
    * Sequelize Session
    * Handlebars.js
* MySQL
* Javascript
* HTML5
* CSS

## Development
This project was developed by  Christopher, Lian & Max, students of the University of California, Berkeley Coding Bootcamp course.  

## Github Repository
https://github.com/MaxMaxS-98/BlackJackProject

## Heroku Deployment
This application is deployed on Heroku. 
https://black-jack-blitz-test.herokuapp.com/

## Screenshots
![Screenshot](![Alt text](https://github.com/MaxMaxS-98/functional.board_app/blob/chris/public/assets/images/insomnia_play.png?raw%3Dtrue))
![Screenshot](![Alt text](https://github.com/MaxMaxS-98/functional.board_app/blob/chris/public/assets/images/login.png?raw%3Dtrue))
![Screenshot](![Alt text](https://github.com/MaxMaxS-98/functional.board_app/blob/chris/public/assets/images/main_screenshot.png?raw%3Dtrue))
![Screenshot](![Alt text](https://github.com/MaxMaxS-98/functional.board_app/blob/chris/public/assets/images/sign_up.png?raw%3Dtrue))


## Contributors
* Christopher Dean
* Lian Li
* Max A.

## Demo Video
https://

## Contact
* Christopher Dean - coderchrisdean@gmail.com
* Lian Li -
* Max A. -