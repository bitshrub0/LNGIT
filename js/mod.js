let modInfo = {
	name: "The Shrub Tree",
	author: "Bitshrub0",
	pointsName: "seeds",
	modFiles: ["layers.js", "tree.js"],

	discordName: "Bitshrub Random Chaos",
	discordLink: "https://discord.gg/9RJK9NpGEY",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 72,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.12",
	name: "Soil & Fruit",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added Soil.<br>
		- Debugged various errors.<br>
		- Added the beginning of Fruit...<br>
	<h3>v0.00</h3><br>
		- Added shrubs.<br>
		- Added shrub upgrades.`

let winText = `Well. That wasn't very hard... For now, at least. More soon!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('s', 32)) gain = gain.times(6)
	if (hasUpgrade('s', 31)) gain = gain.add(6)
	if (hasUpgrade('s', 11)) gain = gain.add(2)
	if (hasUpgrade('s', 12)) gain = gain.times(1.4142135624)
	if (hasUpgrade('s', 13)) gain = gain.times(1.6180339887)
	if (hasUpgrade('s', 14)) gain = gain.times(2.7182818285)
	if (hasUpgrade('s', 15)) gain = gain.times(upgradeEffect("s", 15))
	if (hasUpgrade('s', 21)) gain = gain.times(upgradeEffect("s", 21))
	if (hasUpgrade('s', 22)) gain = gain.times(96)
	if (hasUpgrade('s', 41)) gain = gain.times(616)
	if (hasUpgrade('s', 51)) gain = gain.pow(5.555)
	if (hasUpgrade('s', 61)) gain = gain.times(1e44)
	if (hasMilestone('e', 1)) gain = gain.pow(1.1)
	if (hasUpgrade('s', 73)) gain = gain.times(1858)
	if (hasUpgrade('s', 74)) gain = gain.times(1e25)
	if (hasUpgrade('e', 13)) gain = gain.add(1)
	if (hasUpgrade('e', 14)) gain = gain.times(upgradeEffect('e', 14))
	if (hasUpgrade('e', 21)) gain = gain.times(1000)
	if (hasUpgrade('s', 81)) gain = gain.times(2)
	if (hasUpgrade('s', 82)) gain = gain.times(2500)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Current Endgame: 1 fruit!"
]

// Determines when the game "ends"
function isEndgame() {
	return player.f.points.gte(1)
}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
