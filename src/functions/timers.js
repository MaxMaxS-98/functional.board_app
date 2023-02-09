// timers.js

// These timer functions control different aspects of the game.

let betTimer;
let playerTimer;
let insuranceTimer;
let databaseTimer;

const timers = {
  bet: 10,
  player: 60,
  insurance: 5,
  database: 30,
};

const interval = 1000; // 1 second interval in milliseconds

const startCountdown = (timerName) => {
  let time = timers[timerName];
  betTimer;
  console.log(`Timer "${timerName}" started with ${time} seconds`);

  const intervalId = setInterval(() => {
    time--;
    console.log(`Timer "${timerName}" has ${time} seconds remaining`);

    if (time === 0) {
      console.log(`Timer "${timerName}" has finished`);
      clearInterval(intervalId);
    }
  }, interval);
};

startTimer("bet");
startTimer("player");
startTimer("insurance");
startTimer("database");
