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

    getGameName() {
        return this.gameName;
    }

    getPackNumber() {
        return this.packNumber;
    }

    getNumberOfPlayers() {
        return this.numberOfPlayers;
    }

    getGameType() {
        return this.gameType;
    }

    getAudiencedAllowed() {
        return this.audienceAllowed;
    }

    getFamilyFriendly() {
        return this.familyFriendly;
    }
}

class Filter {
    constructor(filterName, filterValue) {
        this.filterName = filterName;
        this.filterValue = filterValue;
    }

    getFilterName() {
        return this.filterName;
    }

    getFilterValue() {
        return this.filterValue;
    }

    setFilterValue(newFilterValue) {
        this.filterValue = newFilterValue;
    }
}

// Parameters that the user can alter
var filters = [];
filters.push(new Filter("hasPack1", true));
filters.push(new Filter("hasPack2", true));
filters.push(new Filter("hasPack3", true));
filters.push(new Filter("hasPack4", true));
filters.push(new Filter("hasPack5", true));
filters.push(new Filter("hasPack6", true));
filters.push(new Filter("hasPack7", true));
filters.push(new Filter("hasPack8", true));
filters.push(new Filter("triviaGamesFilter", false));
filters.push(new Filter("drawingGamesFilter", false));
filters.push(new Filter("fillInTheBlankGamesFilter", false));
filters.push(new Filter("otherGamesFilter", false));
filters.push(new Filter("audienceAllowedGamesFilter", false));
filters.push(new Filter("familyFriendlyGamesFilter", false));
var numberOfPlayersFilter = -1;

// Number of Jackbox games
const numberOfJackBoxGames = 8;

// Build array of games from table data
var arrayOfGames = [];
var rows = document.getElementById("gamesTable").rows;

for (var i = 1; i < rows.length; i++) {
    var game = new Game(rows[i].cells[0].innerHTML, rows[i].cells[1].innerHTML, rows[i].cells[2].innerHTML, rows[i].cells[3].innerHTML, rows[i].cells[4].innerHTML, 
        rows[i].cells[5].innerHTML);
    arrayOfGames.push(game);
}

// for (var i = 0; i < arrayOfGames.length; i++) {
//     console.log(arrayOfGames[i].getGameName() + " " + arrayOfGames[i].getPackNumber() + " " + arrayOfGames[i].getNumberOfPlayers() + " " + arrayOfGames[i].getGameType() + " " + arrayOfGames[i].getAudiencedAllowed() + " " + arrayOfGames[i].getFamilyFriendly());
// }

/**
 * This function is called whenever the user clicks on one of the checkboxes.
 * The filter method is then called to alter the table.
 * 
 * @param checkbox
 */
function searchCheckbox(checkbox) {

    for (var i = 0; i < filters.length; i++) {
        if (filters[i].getFilterName() == checkbox.name) {
            if (document.getElementById(checkbox.id).checked) {
                filters[i].setFilterValue(true);
            } else {
                filters[i].setFilterValue(false);
            }
        }
    }
    filterTable();
}

/**
 * This function is called when the user enters how many players will be playing.
 * 
 * @param element 
 */
function searchPlayerNumber(element) {
    if (event.key == 'Enter') {
        alert(element.value);
        numberOfPlayersFilter = element.value;
    }
    filterTable();
}

/**
 * This function is called to change the enteries of the table depending on the conditions the user sets.
 * 
 */
function filterTable() {
    // Reset display for each row to show all of the rows at first
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = '';
    }

    // document.getElementById('Drawful').style.display = 'none';

    // Check if the user has packs 1 - 8
    for (var j = 1; j <= numberOfJackBoxGames; j++) {
        if (filters[j-1].getFilterValue()) {
            for (var i = 0; i < arrayOfGames.length; i++) {
                if (arrayOfGames[i].getPackNumber() == j) {
                    rows[i+1].style.display = '';
                }
            }
        } else {
            for (var i = 0; i < arrayOfGames.length; i++) {
                if (arrayOfGames[i].getPackNumber() == j) {
                    rows[i+1].style.display = 'none';
                }
            }
        }
    }


}