var GameDeck, Players, DiscardPile, numberOfPlayers, currentPlayer, currentPlayerNameBox, turnsLeft, points, turnsLeftActivated;
//variables for convience
//PROBABLY WON'T BE NEEDED
var display, playerCountBox;
//initializing
window.onload = function () {
	
		//NEED TO CHANGE THIS STUFF
		display = document.getElementById('displayDiv');
		playerCountBox = document.getElementById('numberOfPlayersInput');
		currentPlayerNameBox = document.getElementById('currentPlayerName');
		points = document.getElementById('currentPoints');

		GameDeck = new Deck();
		DiscardPile = [];
		Players = [];
		currentPlayer = 0;


	}
	/*Objects*/
//Deck Object - using literals
function Deck() {
	var TheDeck = [
		{
			suit: "hearts",
			type: "2",
			value: 2
		},
		{
			suit: "hearts",
			type: "3",
			value: 3
		},
		{
			suit: "hearts",
			type: "4",
			value: 4
		},
		{
			suit: "hearts",
			type: "5",
			value: 5
		},
		{
			suit: "hearts",
			type: "6",
			value: 6
		},
		{
			suit: "hearts",
			type: "7",
			value: 7
		},
		{
			suit: "hearts",
			type: "8",
			value: 8
		},
		{
			suit: "hearts",
			type: "9",
			value: 9
		},
		{
			suit: "hearts",
			type: "10",
			value: 10
		},
		{
			suit: "hearts",
			type: "jack",
			value: 10
		},
		{
			suit: "hearts",
			type: "queen",
			value: 10
		},
		{
			suit: "hearts",
			type: "king",
			value: 10
		},
		{
			suit: "hearts",
			type: "ace",
			value: 11
		},

		{
			suit: "diamonds",
			type: "2",
			value: 2
		},
		{
			suit: "diamonds",
			type: "3",
			value: 3
		},
		{
			suit: "diamonds",
			type: "4",
			value: 4
		},
		{
			suit: "diamonds",
			type: "5",
			value: 5
		},
		{
			suit: "diamonds",
			type: "6",
			value: 6
		},
		{
			suit: "diamonds",
			type: "7",
			value: 7
		},
		{
			suit: "diamonds",
			type: "8",
			value: 8
		},
		{
			suit: "diamonds",
			type: "9",
			value: 9
		},
		{
			suit: "diamonds",
			type: "10",
			value: 10
		},
		{
			suit: "diamonds",
			type: "jack",
			value: 10
		},
		{
			suit: "diamonds",
			type: "queen",
			value: 10
		},
		{
			suit: "diamonds",
			type: "king",
			value: 10
		},
		{
			suit: "diamonds",
			type: "ace",
			value: 11
		},

		{
			suit: "spades",
			type: "2",
			value: 2
		},
		{
			suit: "spades",
			type: "3",
			value: 3
		},
		{
			suit: "spades",
			type: "4",
			value: 4
		},
		{
			suit: "spades",
			type: "5",
			value: 5
		},
		{
			suit: "spades",
			type: "6",
			value: 6
		},
		{
			suit: "spades",
			type: "7",
			value: 7
		},
		{
			suit: "spades",
			type: "8",
			value: 8
		},
		{
			suit: "spades",
			type: "9",
			value: 9
		},
		{
			suit: "spades",
			type: "10",
			value: 10
		},
		{
			suit: "spades",
			type: "jack",
			value: 10
		},
		{
			suit: "spades",
			type: "queen",
			value: 10
		},
		{
			suit: "spades",
			type: "king",
			value: 10
		},
		{
			suit: "spades",
			type: "ace",
			value: 11
		},

		{
			suit: "clubs",
			type: "2",
			value: 2
		},
		{
			suit: "clubs",
			type: "3",
			value: 3
		},
		{
			suit: "clubs",
			type: "4",
			value: 4
		},
		{
			suit: "clubs",
			type: "5",
			value: 5
		},
		{
			suit: "clubs",
			type: "6",
			value: 6
		},
		{
			suit: "clubs",
			type: "7",
			value: 7
		},
		{
			suit: "clubs",
			type: "8",
			value: 8
		},
		{
			suit: "clubs",
			type: "9",
			value: 9
		},
		{
			suit: "clubs",
			type: "10",
			value: 10
		},
		{
			suit: "clubs",
			type: "jack",
			value: 10
		},
		{
			suit: "clubs",
			type: "queen",
			value: 10
		},
		{
			suit: "clubs",
			type: "king",
			value: 10
		},
		{
			suit: "clubs",
			type: "ace",
			value: 11
		},
			];
	return TheDeck;
}

//Player Object - the function that creates the players
function GamePlayer(pName) {
	this.name = pName;
	this.cards = [];
	this.lifes = 3;
}

/*Functions to setup Game*/

function startNewGame() {
	numberOfPlayers = playerCountBox.value;
	createPlayers(numberOfPlayers);
	shuffle();
	deal(numberOfPlayers);
	displayCards();

	//NEED TO CHANGE THIS
	currentPlayerNameBox.innerHTML = Players[currentPlayer].name;
	points.innerHTML = calculatePoints(Players[currentPlayer].cards).points + " " + calculatePoints(Players[currentPlayer].cards).suit;

	//WON'T BE NEEDED
	displayAll();
}

//loop to create the correct number of players, uses push to put on end of the array
function createPlayers(numOfPlayers) {
	//gets rid of any players from a previous game
	Players = [];
	var NewPlayer;
	var playerNames = ["Dan(1)", "Robert(2)", "Richard(3)", "Lee(4)"];
	for (var i = 0; i <= numOfPlayers - 1; i++) {
		NewPlayer = new GamePlayer(playerNames[i]);
		Players.push(NewPlayer);
	}
}

//shuffles cards
function shuffle() {
	var tempArr = [];
	var n = GameDeck.length;
	for (var i = 0; i < n - 1; i++) {
		tempArr.push(GameDeck.splice(Math.floor(Math.random() * GameDeck.length), 1)[0]);
	}
	tempArr.push(GameDeck[0]);
	GameDeck = tempArr;
}

/*Basic Game Play functions*/

function deal(NumOfPlayers) {
	for (var i = 0; i < numberOfPlayers; i++) {
		Players[i].cards = [GameDeck.shift(0), GameDeck.shift(1), GameDeck.shift(2)];
	}
	var firstDiscarded = GameDeck.shift(0);
	DiscardPile.unshift(firstDiscarded);
	
	//NEED TO CHANGE THIS
	//displays the top discard card face up
	document.getElementById('discardCard').innerHTML = DiscardPile[0].suit + " " + DiscardPile[0].type;
	//addEventListenersToDraw();


}

//need to be able to select which card
function draw(cardToDraw) {
	Players[currentPlayer].cards.push(cardToDraw);
	//maybe putting this here will be better
	if (GameDeck.length == 0) {
		GameDeck = DiscardPile;
		shuffle();
		GameDeck.pop();
	}
	displayCards();
	
	//NEED TO CHANGE THIS
	points.innerHTML = calculatePoints(Players[currentPlayer].cards).points + " " + calculatePoints(Players[currentPlayer].cards).suit;
	//addEventListenersToDiscard();

	displayAll();

}

function discard(cardToDiscard) {
	DiscardPile.unshift(cardToDiscard);
	if (GameDeck.length == 0) {
		var lastDiscardCard = DiscardPile.shift(0);
		GameDeck = DiscardPile;
		shuffle();
		DiscardPile.unshift(lastDiscardCard);
	}
	document.getElementById('discardCard').innerHTML = DiscardPile[0].suit + " " + DiscardPile[0].type;
	displayCards();
	switchPlayer();
//PROBABLY WON'T BE NEEDED
	if (lastTurn != 0) {
		displayAll();
	}
}

//switches players
function switchPlayer() {
	if (turnsLeft != 0) {
		if (turnsLeftActivated) {
			turnsLeft--;
		}

		//changes the current player, if exceeds the number of players goes to 0
		currentPlayer++;
		if (currentPlayer >= numberOfPlayers) {
			currentPlayer = 0;
		}
		displayCards();

		//if has 3 aces, then call endRound()

		//updates name of whose turn it is
		//NEED TO CHANGE THIS
		currentPlayerNameBox.innerHTML = Players[currentPlayer].name;
		points.innerHTML = calculatePoints(Players[currentPlayer].cards).points + " " + calculatePoints(Players[currentPlayer].cards).suit;


	} else {
		endRound();
		//NEED TO CHANGE THIS
		//takes name and points out
		currentPlayerNameBox.innerHTML = "";
		points.innerHTML = "";
	}

}

//put player's cards in divs
//DEFINITELY NEEDS TO BE CHANGED
function displayCards() {
	var card = Players[currentPlayer].cards;
	var n = card.length;

	for (var i = 0; i < 4; i++) {
		if (card[i] == undefined) {
			document.getElementById('card' + (i + 1)).innerHTML = "";
		} else {
			document.getElementById('card' + (i + 1)).innerHTML = card[i].suit + " " + card[i].type;
		}
	}

}

//starts a counter for how many turns are left, switches player
function lastTurn() {
	turnsLeftActivated = true;
	turnsLeft = Players.length - 1;
	switchPlayer();
}

//finds out the loser and makes a scoreboard
//NEED TO CHANGE
function endRound() {
	//sets the first player as the default loser and then checks the other players to see if they had a lower total
	var loser = Players[0];
	var scoreBoard = loser.name + " had " + calculatePoints(loser.cards).points + " Points. <br>";

	for (var i = 1; i < Players.length; i++) {
		if (calculatePoints(Players[i].cards).points < calculatePoints(loser.cards).points) {
			loser = Players[i];
		}

		scoreBoard += Players[i].name + " had " + calculatePoints(Players[i].cards).points + " Points. <br>";
	}
	loser.lifes--;
	display.innerHTML = loser.name + " lost. Below is a summary: <br> " + scoreBoard;
	if (loser.lifes == 0) {
		//need to remove player if no lives left
		var indexOfPlayer = Players.indexOf(loser);
		Players.splice(indexOfPlayer, 1);
		numberOfPlayers = Players.length;
	}

}

function startNewRound() {
	clearCards();

	GameDeck = new Deck();
	DiscardPile = [];

	shuffle();
	deal(numberOfPlayers);
	displayCards();
	//NEED TO CHANGE THIS
	currentPlayerNameBox.innerHTML = Players[currentPlayer].name;
	points.innerHTML = calculatePoints(Players[currentPlayer].cards).points + " " + calculatePoints(Players[currentPlayer].cards).suit;

	//PROBABLY NOT NEEDED
	displayAll();

}

function clearCards() {
	for (var i = 0; i < Players.length; i++) {
		Players[i].cards = [];
	}

}

//calculates the points and returns the highest per each suit
function calculatePoints(cards) {


	var handDict = {
		'spades': 0,
		'hearts': 0,
		'diamonds': 0,
		'clubs': 0,
		'highestSuit': "",
		'highestNumber': 0
	};
	for (var i = 0; i < cards.length; i++) {
		var curSuit = cards[i].suit;
		handDict[curSuit] = handDict[curSuit] + cards[i].value;
		if (handDict['highestNumber'] < handDict[curSuit]) {
			handDict['highestSuit'] = curSuit;
			handDict['highestNumber'] = handDict[curSuit];
		}
	}
	var pointsAndSuit = {
		'points': handDict['highestNumber'],
		'suit': handDict['highestSuit']
	};

	return pointsAndSuit;
}

/*		//not working yet, adding event listeners
		function addEventListenersToDraw(){
			document.getElementById('drawCard').onclick = draw(GameDeck[0]);
			document.getElementById('discardCard').addEventListener('click', draw(DiscardPile[0]));
		}
		
		function addEventListenersToDiscard(){
			document.getElementById('card1').onclick = discard(Players[currentPlayer].cards[0]);
			document.getElementById('card2').onclick = discard(Players[currentPlayer].cards[1]);
			document.getElementById('card3').onclick = discard(Players[currentPlayer].cards[2]);
			document.getElementById('card4').onclick = discard(Players[currentPlayer].cards[3]);
			
		}*/

/*functions for convience*/
//THESE FUNCTIONS WON'T BE NEEDED
//displays the length of the deck
function showDeckLength() {
	display.innerHTML = GameDeck.length;
}

//shows the cards as "h2, s10, etc" and displays them in the display div
function seeCards(cards) {
	var textVersion = "";
	for (var i = 0; i < cards.length; i++) {
		textVersion += cards[i].suit.charAt(0) + cards[i].type;
		if (i < cards.length - 1) {
			textVersion += ", ";
		}
	}
	if (textVersion == "") {
		textVersion = "empty";
	}
	//this one displays it in the display div
	display.innerHTML = textVersion;
}

//returns a string of the cards 
function returnCardsString(cards) {
	var textVersion = "";
	for (var i = 0; i < cards.length; i++) {
		textVersion += cards[i].suit.charAt(0) + cards[i].type;
		if (i < cards.length - 1) {
			textVersion += ", ";
		}
	}
	//this one returns the string to be used in the function in which it is called
	return textVersion;
}

//displays the player summary to the display div
function showAllPlayers() {
	var playerSummary = "";
	for (var i = 0; i < Players.length; i++) {
		Players[i].totalPoints;
		playerSummary += "Player" + (i + 1) + ": " + Players[i].name + ". hand: (" + returnCardsString(Players[i].cards) + "). lives: " + Players[i].lifes + ". Points: " + calculatePoints(Players[i].cards).points + "<br>";
	}
	display.innerHTML = playerSummary;
}

//just a simple display function
function seeResults(item) {
		display.innerHTML = JSON.stringify(item);
	}
	//shows both the discard and gameDeck in the display div (values & length) for debugging
function displayAll() {
	var DeckSummary = returnCardsString(GameDeck);
	var discardSummary = returnCardsString(DiscardPile);

	var deckLength = GameDeck.length;
	var discardLength = DiscardPile.length;

	display.innerHTML = "GameDeck[" + deckLength + "] = (" + DeckSummary + ").<br> Discard" + "[" + discardLength + "] = (" + discardSummary + ")";
}