"use strict"

class Game {
    constructor(gameName, packNumber, numberOfPlayers, gameType, audienceAllowed, familyFriendly) {
        this.gameName = gameName;
        this.packNumber = packNumber;
        this.numberOfPlayers = numberOfPlayers;
        this.gameType = gameType;
        this.audienceAllowed = audienceAllowed;
        this.familyFriendly = familyFriendly;
    }
}