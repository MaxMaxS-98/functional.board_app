// timers.js

// These timer functions control different aspects of the game.

let betTimer;
let playerTimer;
let insuranceTimer;
let databaseTimer;

const timers = {
  betTimer: 10,
  playerTimer: 60,
  insuranceTimer: 5,
  databaseTimer: 30,
};

const interval = 1000; // 1 second interval in milliseconds

const startTimer = (timerName) => {
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

startTimer("betTimer");
startTimer("playerTimer");
startTimer("insuranceTimer");
startTimer("databaseTimer");
