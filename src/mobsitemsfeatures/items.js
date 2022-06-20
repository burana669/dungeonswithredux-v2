const mace = {
    type: "item",
    itemType: "weapon",
    name: "Mace",
    symbol: "(",
    damage: 1,
    
  }
  
const helmet = {
    type: "item",
    itemType: "head",
    name: "Helmet",
    symbol: "]",
    armor: 1,
   
  }
  
const loincloth = {
    type: "loincloth",
    name: "Short pants",
    symbol: "]",
    armor: 2,
   
  }
const sword = {
    type: "weapon",
    name: "Sword",
    symbol: "(",
    damage: 2,
    
  }

const allItems = [mace, sword, helmet, loincloth]


export const randomItem = (type, position) => {

    switch (type) {
        case "random":
        
        const random = Math.floor((Math.random() * allItems.length))

        let item = allItems[random]
        item.positionX = position.positionX
        item.positionY = position.positionY
            
        return item
    
        default:
            break;
    }


}

