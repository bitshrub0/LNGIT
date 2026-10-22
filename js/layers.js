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
    gainMult() {
        if (hasUpgrade('l', 14)) return upgradeEffect('l', 14)
        return 1
    },
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
        12: {
            unlocked() {return hasUpgrade('l', 25)},
            title: "What's this? Another row 1 upgrade?",
            description: "Quite! Point gain boosts numbers",
            tooltip: "log25(points+1)+1",
            effect() {
                return player[this.layer].points.add(1).log(25).add(1)
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x"},
            cost: new Decimal(1000),
        },
        13: {
            unlocked() {return hasUpgrade('l', 35)},
            title: "Backslash",
            description: "Numbers boost themselves",
            tooltip: "log1000(numbers+1)+1",
            effect() {
                return player[this.layer].points.add(1).log(1000).add(1)
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x"},
            cost: new Decimal(1200000),
        },
        14: {
            unlocked() {return hasUpgrade('l', 45)},
            title: "Feedback Loop",
            description: "Numbers boost point gain",
            tooltip: "log10000(numbers+1)+1",
            effect() {
                return player.points.add(1).log(10000).add(1)
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x"},
            cost: new Decimal(1330000000),
        },
        15: {
            unlocked() {return hasUpgrade('l', 55)},
            title: "New Layer",
            description: "Unlock a new layer!...",
            cost: new Decimal(7.5e12),
        },
        21: {
            unlocked() {return hasUpgrade('l', 11)},
            title: "I: Oh look, something else",
            description: "x2 to number gain.",
            cost: new Decimal(3),
        },
        22: {
            unlocked() {return hasUpgrade('l', 21)},
            title: "II: It builds",
            description: "x3 to number gain.",
            cost: new Decimal(8),
        },
        23: {
            unlocked() {return hasUpgrade('l', 22)},
            title: "III: And yet More",
            description: "x4 to number gain.",
            cost: new Decimal(30),
        },
        24: {
            unlocked() {return hasUpgrade('l', 23)},
            title: "IV: No Surprises",
            description: "x5 to number gain.",
            cost: new Decimal(144),
        },
        25: {
            unlocked() {return hasUpgrade('l', 24)},
            title: "V: Full Row",
            description: "x6 to number gain.",
            cost: new Decimal(840),
        },
        31: {
            unlocked() {return hasUpgrade('l', 12)},
            title: "VI: Continuation",
            description: "x7 to number gain.",
            cost: new Decimal(2000),
        },
        32: {
            unlocked() {return hasUpgrade('l', 31)},
            title: "VII: Number is Growing",
            description: "x8 to number gain.",
            cost: new Decimal(8250),
        },
        33: {
            unlocked() {return hasUpgrade('l', 32)},
            title: "VIII: Into the Millions",
            description: "x9 to number gain.",
            cost: new Decimal(21000),
        },
        34: {
            unlocked() {return hasUpgrade('l', 33)},
            title: "IX: Stop the Count!",
            description: "x10 to number gain.",
            cost: new Decimal(78000),
        },
        35: {
            unlocked() {return hasUpgrade('l', 34)},
            title: "IX: I fear for the next upgrade",
            description: "x11 to number gain.",
            cost: new Decimal(273000),
        },
        41: {
            unlocked() {return hasUpgrade('l', 13)},
            title: "XI: An Irresponsible Speed of Growth",
            description: "x12 to number gain.",
            cost: new Decimal(1725000),
        },
        42: {
            unlocked() {return hasUpgrade('l', 41)},
            title: "XII: Patience! There's Still More to Come",
            description: "x13 to number gain.",
            cost: new Decimal(5600000),
        },
        43: {
            unlocked() {return hasUpgrade('l', 42)},
            title: "XIII: Trillion Time",
            description: "x14 to number gain.",
            cost: new Decimal(20800000),
        },
        44: {
            unlocked() {return hasUpgrade('l', 43)},
            title: "XIV: So Many Numbers...",
            description: "x15 to number gain.",
            cost: new Decimal(72000000),
        },
        45: {
            unlocked() {return hasUpgrade('l', 44)},
            title: "XV: New layer when",
            description: "x16 to number gain.",
            cost: new Decimal(330000000),
        },
        51: {
            unlocked() {return hasUpgrade('l', 14)},
            title: "XVI: Progress!!",
            description: "x17 to number gain.",
            cost: new Decimal(2250000000),
        },
        52: {
            unlocked() {return hasUpgrade('l', 51)},
            title: "XVII: When Number be Numbering",
            description: "x18 to number gain.",
            cost: new Decimal(1.375e10),
        },
        53: {
            unlocked() {return hasUpgrade('l', 52)},
            title: "XVIII: Legally Non-Existent",
            description: "x19 to number gain.",
            cost: new Decimal(6.84e10),
        },
        54: {
            unlocked() {return hasUpgrade('l', 52)},
            title: "XIX: Technically this whole game is a timewall when you think about it, also apologies for making the title so long that it stretches out the rest of the row in a really stupid and frustrating way because it completely ruins the UI and I'm going to get it in the neck from all the other TMT devs, whoops",
            description: "x20 to number gain.",
            cost: new Decimal(2.94e11),
        },
        55: {
            unlocked() {return hasUpgrade('l', 54)},
            title: "XX: Well??",
            description: "x21 to number gain.",
            cost: new Decimal(1e12),
        },
    },
})

addLayer("ach", {
    name: "Achievements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#c7e711",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Achievements", // Name of prestige currency
    row: "side", // Row the layer is in on the tree (0 is the first row)
    achievements: {
        rows: 1,
        columns: 2,
        11: {
            name: "Hi :)",
            tooltip: "Get 1 point. <br>Reward: A small sense of achievement.",
            done() {player.l.points.gte(1)},
            onComplete() {
                addPoints('ach', 1)
            },
        },
    },
})