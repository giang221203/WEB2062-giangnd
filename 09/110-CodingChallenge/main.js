const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Ganrny',
        'Lewandowski',
    
    [
        'Burki',
        'Schulz',
        'Humels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
],
scoze: '4:0',
scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
date: 'Nov 9th,2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.25,
},
}
const [players1, players2] = game.players;
console.log(players1,players2);

const[gk, ...fiePlayers] = players1;
console.log(gk, fiePlayers);

const allPlayers = [... players1, ...players2];
console.log(allPlayers);

const players1Final = [... players1, 'Thiago','Coutinho','Periscic'];

const {odds: {team1, x: draw,team2},} =game;
console.log(team1, draw, team2);

const printGoals = function(){
    printGoals('Davies', 'Muller','Lewandowski','Kimich');
};
printGoals('Davies', 'Muller','Lewandowski','Kimmich');
printGoals('Davies','Muller');
printGoals(...game,scored);

team1 < team2 && console.log('Team 1 is more likeky to win');