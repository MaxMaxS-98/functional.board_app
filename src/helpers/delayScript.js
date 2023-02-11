const sleep = require('sleep-promise');

async function addDelay() {
  console.log('Waiting 2 seconds...');
  await sleep(2000);
  console.log('2 seconds have passed.');
}

addDelay();
module.exports = addDelay;