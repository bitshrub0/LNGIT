addLayer("l", {
    name: "LNGI", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "LNGI", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a0a0a0",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "points", // Name of prestige currency
    baseResource: "numbers", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    mult: 1,
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "q", description: "Q: Reset for points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Begin",
            description: "Number gain +1",
            cost: new Decimal(1),
        },
        21: {
            title: "I: Oh look, something else",
            description: "x2 to number gain.",
            cost: new Decimal(3),
        },
        22: {
            title: "II: It builds",
            description: "x3 to number gain.",
            cost: new Decimal(8),
        },
        23: {
            title: "III: And yet More",
            description: "x4 to number gain.",
            cost: new Decimal(30),
        },
    },
})