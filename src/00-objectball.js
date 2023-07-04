
function gameObject() {
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return game;
}


function numPointsScored(name) {
    const game = gameObject();
    for (const side in game) {
        for (const player in game[side].players) {
            if (player === name) {
                return game[side].players[player].points;
            }
        }
    }
}

//console.log(numPointsScored('Jason Terry'));

function shoeSize(name) {
    const game = gameObject();
    for (const side in game) {
        for (const player in game[side].players) {
            if (player === name) {
                return game[side].players[player].shoe;
            }
        }
    }
}

//console.log(shoeSize('Jason Terry'));

function teamColors(teamName) {
    const game = gameObject();
    for (const side in game) {
        if (game[side].teamName === teamName) {
            return game[side].colors;
        }
    }
}

//console.log(teamColors('Charlotte Hornets'));

function teamNames() {
    const game = gameObject();
    const arrTeamNames = [];
    for (const side in game) {
        arrTeamNames.push(game[side].teamName);
    }
    return arrTeamNames;
}

//console.log(teamNames());

function playerNumbers(teamName) {
    const game = gameObject();
    const arrPlayerNumbers = [];
    for (const side in game) {
        if (game[side].teamName === teamName) {
            for (const player in game[side].players) {
                arrPlayerNumbers.push(game[side].players[player].number);
            }
        }
    }
    return arrPlayerNumbers;
}

//console.log(playerNumbers('Charlotte Hornets'));

function playerStats(name) {
    const game = gameObject();
    for (const side in game) {
        for (const player in game[side].players) {
            if (player === name) {
                return game[side].players[player];
            }
        }
    }
}

//console.log(playerStats('Jason Terry'));

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoe = -1;
    let maxShoeRebound = -1;
    for (const side in game) {
        for (const player in game[side].players) {
            if (maxShoe < game[side].players[player].shoe) {
                maxShoe = game[side].players[player].shoe;
                maxShoeRebound = game[side].players[player].rebounds;
            }
        }
    }
    return maxShoeRebound;
}

//console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = -1;
    let maxPointsPlayer = '';
    for (const side in game) {
        for (const player in game[side].players) {
            if (maxPoints < game[side].players[player].points) {
                maxPoints = game[side].players[player].points;
                maxPointsPlayer = player;
                //debugger;
            }
        }
    }
    return maxPointsPlayer;
}

//console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    let winningTeam = "";
    let winningTeamPoints = -1;
    for (const side in game) {
        let teamPoints = 0;
        for (const player in game[side].players) {
            teamPoints += game[side].players[player].points;
        }
        //debugger;
        if (winningTeamPoints < teamPoints) {
            winningTeamPoints = teamPoints;
            winningTeam = game[side].teamName;
            //debugger;
        }
    }
    return winningTeam;
}

//console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    for (const side in game) {
        //debugger;
        for (const player in game[side].players) {
            //debugger;
            if (longestName.length < player.length) {
                longestName = player;
                //debugger;
            }
        }
    }
    return longestName;
}

//console.log(playerWithLongestName());

function playerWithMostSteal() {
    const game = gameObject();
    let maxSteals = -1;
    let maxStealsPlayer = '';
    for (const side in game) {
        for (const player in game[side].players) {
            if (maxSteals < game[side].players[player].steals) {
                maxSteals = game[side].players[player].steals;
                maxStealsPlayer = player;
            }
        }
    }
    return maxStealsPlayer;
}

function doesLongNameStealATon() {
    return playerWithLongestName() === playerWithMostSteal();
}

//console.log(doesLongNameStealATon());

