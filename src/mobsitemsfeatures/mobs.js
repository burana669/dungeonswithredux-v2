

const troll = {
    type: "mob",
    name: "troll",
    symbol: "T",
    damage: 4,
    health: 30,
    positionX: 3,
    positionY: 1
}

const orc = {
    type: "mob",
    name: "orc",
    symbol: "o",
    damage: 2,
    health: 10,
    positionX: 1,
    positionY: 3
}

const allMobs = [troll, orc]

export const randomMobWithCoordinates = (tier) => {
    switch (tier) {
        case "random":
            const random = Math.floor((Math.random() * allMobs.length))

        
        let mob = allMobs[random]
            
        mob.positionX = Math.floor((Math.random() * 4)) + 1
        mob.positionY = Math.floor((Math.random() * 4)) + 1
        
        console.log(Math.floor((Math.random() * 4)))

        return mob
    
        default:
            break;
    }
}