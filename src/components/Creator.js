

import { useDispatch} from "react-redux"
import { useEffect } from "react"
import {changeView, createItem} from "../actions"
import { createMob } from "../actions"
import {createPlayer} from "../actions"
import { randomMobWithCoordinates } from "../mobsitemsfeatures/mobs"
import { randomItem } from "../mobsitemsfeatures/items"


export const Creator = () => {
const dispatch = useDispatch()





const player = {
    id: "player",
    type: "player",
    name: "@",
    damage: 1,
    health: 100,
    positionX: 2,
    positionY: 1
}

const newView = {
    inventory: false,
    playArea: true,
    

}
const itemPosition = {
  positionX: 1,
  positionY: 1
}




  
  useEffect (() => {
    dispatch(createMob(randomMobWithCoordinates("random")))
   
    dispatch(createPlayer(player))
    dispatch(changeView(newView))
    dispatch(createItem(randomItem("random", itemPosition)))
    
    
  }, [])


return null


}