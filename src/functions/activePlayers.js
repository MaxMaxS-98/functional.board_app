

    //retrieve active players from json
    let activePlayers = [];
    let countPlayers = 0;
    // read from json

    let activePlayersJSONdb = require('../db/activePlayers.json');
    let activePlayersJSON = JSON.parse(activePlayersJSONdb);
    
    for (let i = 0; i < activePlayersJSON.length; i++) {
        countPlayers++;
        activePlayers.push(activePlayersJSON[i]);
    }
    
    console.log(activePlayers);
    console.log(countPlayers);
    