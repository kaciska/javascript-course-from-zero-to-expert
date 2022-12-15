/*Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
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
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
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
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

/*1.*/
const [player1, player2] = game.players
console.log('team 1', player1)
console.log('team 2', player2)

/*2.*/
const [gk, ...fieldPlayers] = player1
console.log('goal keeper:', gk)
console.log('field players', fieldPlayers)

/*3.*/
const allPlayers = [...player1, ...player2]
console.log('allPlayers', allPlayers)

/*4.*/
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
console.log('Team 1 with substitute players', players1Final)

/*5.*/
//const {team1, x: draw, team2} = game.odds
const {
  odds: {team1, x: draw, team2},
} = game // druhý způsob zápisu - destructuring uvnitř destructuring
console.log('Team 1 odd:', team1, 'Draw:', draw, 'Team 2 odd:', team2)

/*6.*/
const printGoals = function (...scoredPlayer) {
  console.log('Array with goal player:', scoredPlayer)
  console.log('Amount of goals:', scoredPlayer.length)
  console.log('Players one by one:', ...scoredPlayer)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

/*7.*/
game.odds.team1 < game.odds.team2 &&
  console.log('The team 1 is more likely to win.')

game.odds.team1 > game.odds.team2 &&
  console.log('The team 2 is more likely to win.')
