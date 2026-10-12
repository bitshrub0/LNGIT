addLayer("b1", {
    name: "Bonus Game 1", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: [],
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#0bffaa", // Can be a function that takes requirement increases into account
    requires: new Decimal(1e250),
    resource: "ducks", // Name of prestige currency
    baseResource: "seeds", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: "side", // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "1", description: "1: Reset for ducks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        let bonusIShow = false
        if (hasUpgrade('f', 12) || player[this.layer].unlocked) bonusIShow = true
        return bonusIShow
    },
    getPassiveGeneration() {
        let passgen = 0
        if (hasUpgrade("b1", 11)) passgen = 1
        return passgen
    },
    upgrades: {
        11: {
            title: "Woohoo! What's this?",
            description: "Passively generate ducks per second! :)",
            cost: new Decimal(1),
        },
    },
})