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
        if (hasUpgrade('s', 72)) mult = mult.times(1.29154966501488398648e11)
        if (hasUpgrade('s', 73)) mult = mult.times(1858)
        if (hasUpgrade('e', 22)) mult = mult.times(109)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if (hasUpgrade('s', 23) && !hasUpgrade('s', 61)) exp = exp.times(3.1415926536)
        if (hasMilestone('e', 2)) exp = exp.times(2)
        if (hasUpgrade('s', 71)) exp = exp.tetrate(1.1)
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
            description: "Seed gain x1e44 but nerf shrub gain. Also: unlock Earth!",
            cost: new Decimal(1.5e97),
        },
        71: {
            unlocked() { return hasMilestone('e', 2) },
            title: "Shrubs II",
            description: "Oh god... shrub gain *^^1.1*",
            cost: new Decimal(5e118),
        },
        72: {
            unlocked() { return hasUpgrade('s', 71) },
            title: "Seednami",
            description: "xe11.111111... to shrub gain",
            cost: new Decimal(3e135),
        },
        73: {
            unlocked() { return hasUpgrade('s', 72) },
            title: "Meiji Wanderer",
            description: "x1603 to seed gain, x1858 to shrub gain",
            cost: new Decimal(2e160),
        },
        74: {
            unlocked() { return hasUpgrade('s', 73) },
            title: "Muffins! [1/6]",
            description: "Hint? Also x1e25 seeds",
            cost: new Decimal(1e171),
        },
        81: {
            unlocked() { return hasMilestone('e', 5) },
            title: "Bits",
            description: "x2 to seed gain",
            cost: new Decimal(1e198),
        },
        82: {
            unlocked() { return hasUpgrade('s', 81) },
            title: "At last, Something New",
            description: "x2500 seeds and unlock Fruit.",
            cost: new Decimal(1e200),
        },
    },
})

addLayer("e", {
    name: "earth", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ["s"], // layer branches
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#88413e",
    requires: new Decimal(1e100), // Can be a function that takes requirement increases into account
    resource: "soil", // Name of prestige currency
    baseResource: "seeds", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(0.01)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(0.01)
        return exp
    },
    update(diff) {
        let passiveGain = new Decimal(0)
        if (hasMilestone('e', 0)) {
            passiveGain = player.points.div(1e100).pow(0.08).times(0.05).times(diff)
        }
        if (hasMilestone('e', 4)) {
            passiveGain = player.points.div(1e80).pow(0.2).times(diff) 
        }
        if (hasUpgrade('e', 11)) passiveGain = passiveGain.times(7)
        if (hasUpgrade('e', 12)) passiveGain = passiveGain.pow(1.15)
        if (hasUpgrade('e', 12)) passiveGain = passiveGain.times(10)
        if (hasUpgrade('e', 23)) passiveGain = passiveGain.times(8e9)
        player.e.points = player.e.points.add(passiveGain)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for soil", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        let earthShow = false
        if (hasUpgrade('s', 61) || player[this.layer].unlocked) earthShow = true
        return earthShow
    },
    milestones: {
        0: {
            requirementDescription: "1 Soil",
            done() { return player.e.points.gte(1) }, // Condition to unlock
            effectDescription: "Start generating soil",
        },
        1: {
            requirementDescription: "6 Soil",
            done() { return player.e.points.gte(6) },
            effectDescription: "^1.1 to seed gain",
        },
        2: {
            requirementDescription: "88 Soil",
            done() { return player.e.points.gte(88) },
            effectDescription: "Unlock more shrub upgrades!",
        },
        3: {
            requirementDescription: "101 Soil",
            done() { return player.e.points.gte(101) },
            effectDescription: "Square shrub gain",
        },
        4: {
            requirementDescription: "5000 Soil",
            done() { return player.e.points.gte(5000) },
            effectDescription: "Soil formula improved, and unlock more soil upgrades",
        },
        5: {
            requirementDescription: "1e17 Soil",
            done() { return player.e.points.gte(1e17) },
            effectDescription: "Unlock a couple more shrub upgrades.",
        },
    },
    upgrades: {
        11: {
            unlocked() { return hasMilestone('e', 0) },
            title: "Roots",
            description: "x7 to soil gain!",
            cost: new Decimal(2),
        },
        12: {
            unlocked() { return hasUpgrade('e', 11) },
            title: "Diffusion",
            description: "^1.15 to soil gain!",
            cost: new Decimal(30),
        },
        13: {
            unlocked() { return hasUpgrade('e', 12) },
            title: "Micro-organism concentration",
            description: "x10 to soil gain, +1 to seed gain :]",
            cost: new Decimal(100),
        },
        14: {
            unlocked() { return hasUpgrade('e', 13) },
            title: "Biological feedback",
            description: "Soil boosts seed gain",
            cost: new Decimal(1500),
            tooltip() {
                return "log1.1(soil)"
            },
            effect() {
            return player[this.layer].points.log(1.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        21: {
            unlocked() { return hasMilestone('e', 4) },
            title: "Respiration",
            description: "x1000 to seed gain",
            cost: new Decimal(25000),
        },
        22: {
            unlocked() { return hasUpgrade('e', 21) },
            title: "Dust in the wind",
            description: "x109 to shrub gain",
            cost: new Decimal(109000),
        },
        23: {
            unlocked() { return hasUpgrade('e', 22) },
            title: "Earth",
            description: "x8 billion to soil gain",
            cost: new Decimal(8e18),
        },
    },
})

addLayer("f", {
    name: "fruit", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ['s', 'e'],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff380b",
    requires: new Decimal(1e200), // Can be a function that takes requirement increases into account
    resource: "fruit", // Name of prestige currency
    baseResource: "shrubs", // Name of resource prestige is based on
    baseAmount() {return player.s.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for fruits", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        let fruitShow = false
        if (hasUpgrade('s', 82) || player[this.layer].unlocked) fruitShow = true
        return fruitShow
    },
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(0.01)
        return exp
    },
})