addLayer("s", {
    name: "shrub", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#53ff1a",
    requires: new Decimal(8), // Can be a function that takes requirement increases into account
    resource: "shrubs", // Name of prestige currency
    baseResource: "seeds", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('s', 15)) mult = mult.times(upgradeEffect('s', 15))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if (hasUpgrade('s', 23) && !hasUpgrade('s', 61)) exp = exp.times(3.1415926536)
            return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for shrubs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Bit",
            description: "A simple +2 to seed gain.",
            cost: new Decimal(1),
        },
        12: {
            unlocked() { return hasUpgrade("s", 11) },
            title: "Sow the seeds",
            description: "Mathematical! x(√2) to seed gain",
            tooltip() { 
            return "*1.4142135624"
            },
            cost: new Decimal(4),
        },
        13: {
            unlocked() { return hasUpgrade("s", 12) },
            title: "Grow the seeds",
            description: "More mathematical!! x(φ) to seed gain, heh heh.",
            tooltip() { 
            return "*1.6180339887"
            },
            cost: new Decimal(8),
        },
        14: {
            unlocked() { return hasUpgrade("s", 13) },
            title: "Harvesting",
            description: "This one is more relevant: x(𝑒) to seed gain.",
            tooltip() { 
            return "*2.7182818285"
            },
            cost: new Decimal(15),
        },
        15: {
            unlocked() { return hasUpgrade("s", 14) },
            title: "Reap what thou sow'st",
            description: "Inflation Time - shrubs boost shrub and seed gain!",
            tooltip() { 
            return "log4(shrubs+1)+1"
            },
            cost: new Decimal(40),
            effect() {
            return player[this.layer].points.add(1).log(4).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            unlocked() { return hasUpgrade("s", 15) },
            title: "Enough with the plant jokes!!",
            description: "Seed gain boosts itself!",
            tooltip() { 
            return "((log3.5(seeds+1))+1)*0.15"
            },
            cost: new Decimal(144),
            effect() {
            return player.points.add(1).log(3.5).add(10).times(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            unlocked() { return hasUpgrade("s", 21) },
            title: "Gwa Reference",
            description: "x96 to seed gain!!",
            cost: new Decimal(696),
        },
        23: {
            unlocked() { return hasUpgrade("s", 22) },
            title: "This is the last mathematical constant, trust",
            description: "^π to shrub gain!",
            tooltip() { 
            return "^3.1415926536"
            },
            cost: new Decimal(31416),
        },
        31: {
            unlocked() { return hasUpgrade("s", 23) },
            title: "Warp Factor",
            description: "+6 to seed gain BEFORE ALL OTHER EFFECTS!",
            cost: new Decimal(4e12),
        },
        32: {
            unlocked() { return hasUpgrade("s", 31) },
            title: "Factor Warp",
            description: "x6 to seed gain BEFORE ALL OTHER EFFECTS!",
            cost: new Decimal(1.4e14),
        },
        41: {
            unlocked() { return hasUpgrade("s", 32) },
            title: "Satanic Upgrade",
            description: "x616 to seed gain",
            cost: new Decimal(6.16e14),
        },
        51: {
            unlocked() { return hasUpgrade("s", 41) },
            title: "Ridiculous :P",
            description: "^5.555 to seed gain",
            cost: new Decimal(1e20),
        },
        52: {
            unlocked() { return hasUpgrade("s", 51) },
            title: "Prepare for Big Numbers",
            description: "???",
            cost: new Decimal(1e97),
        },
        61: {
            unlocked() { return hasUpgrade("s", 52) },
            title: "This bit is boring now",
            description: "Seed gain x1e44, shrub gain nerf but unlock Rain!",
            cost: new Decimal(1e99),
        }
    },
})
