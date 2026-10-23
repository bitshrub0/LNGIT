let modInfo = {
	name: "The LNGI Tree",
	author: "Bitshrub0",
	pointsName: "numbers",
	modFiles: ["layers.js", "tree.js", "constants.js"],

	discordName: "Bitshrub Random Chaos",
	discordLink: "https://discord.gg/9RJK9NpGEY",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 72,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Treevolution",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added Trees.<br>
	<h3>v0.0</h3><br>
		- Added numbers and points.`

let winText = `...`

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
	if (hasUpgrade('l', 11)) gain = gain.add(1)
	if (hasUpgrade('t', 16)) gain = gain.add(10)
	if (hasUpgrade('l', 21)) gain = gain.times(2)
	if (hasUpgrade('l', 22)) gain = gain.times(3)
	if (hasUpgrade('l', 23)) gain = gain.times(4)
	if (hasUpgrade('l', 24)) gain = gain.times(5)
	if (hasUpgrade('l', 25)) gain = gain.times(6)
	if (hasUpgrade('l', 31)) gain = gain.times(7)
	if (hasUpgrade('l', 32)) gain = gain.times(8)
	if (hasUpgrade('l', 33)) gain = gain.times(9)
	if (hasUpgrade('l', 34)) gain = gain.times(10)
	if (hasUpgrade('l', 35)) gain = gain.times(11)
	if (hasUpgrade('l', 41)) gain = gain.times(12)
	if (hasUpgrade('l', 42)) gain = gain.times(13)
	if (hasUpgrade('l', 43)) gain = gain.times(14)
	if (hasUpgrade('l', 44)) gain = gain.times(15)
	if (hasUpgrade('l', 45)) gain = gain.times(16)
	if (hasUpgrade('l', 51)) gain = gain.times(17)
	if (hasUpgrade('l', 52)) gain = gain.times(18)
	if (hasUpgrade('l', 53)) gain = gain.times(19)
	if (hasUpgrade('l', 54)) gain = gain.times(20)
	if (hasUpgrade('l', 55)) gain = gain.times(21)
	if (hasUpgrade('l', 15)) gain = gain.times(10)
	if (hasUpgrade('t', 12)) gain = gain.times(upgradeEffect('t', 12))
	if (hasUpgrade('l', 12)) gain = gain.times(upgradeEffect('l', 12))
	if (hasUpgrade('l', 13)) gain = gain.times(upgradeEffect('l', 13))
	if (hasUpgrade('t', 11)) gain = gain.times(upgradeEffect('t', 11))
	if (hasUpgrade('t', 13)) gain = gain.pow(1.05)
	if (hasUpgrade('l', 61)) gain = gain.pow(1.1)
	if (hasUpgrade('l', 62)) gain = gain.pow(1.2)
	if (hasUpgrade('l', 63)) gain = gain.pow(1.3)
	if (hasUpgrade('l', 64)) gain = gain.pow(1.4)
	if (hasUpgrade('l', 65)) gain = gain.pow(1.5)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"Current Endgame: Trees Milestone 3"
]

// Determines when the game "ends"
function isEndgame() {
	return hasMilestone('t', 2)
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
