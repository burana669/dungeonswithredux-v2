

import { useDispatch} from "react-redux"
import { useEffect } from "react"
import {changeView, createItem} from "../actions"
import { createMob } from "../actions"
import {createPlayer} from "../actions"



export const Creator = () => {
const dispatch = useDispatch()



const newmob = {
    name: "T",
    damage: 4,
    health: 10,
    positionX: 3,
    positionY: 1
}

const newmob2 = {
    name: "o",
    damage: 2,
    health: 10,
    positionX: 1,
    positionY: 3
}

const player = {
    id: "player",
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

const item = {
  type: "weapon",
  name: "Mace",
  damage: 1
}

const item2 = {
  type: "head",
  name: "Helmet",
  armor: 1
}

const item3 = {
  type: "loincloth",
  name: "Short pants",
  armor: 2
}
const item4 = {
  type: "weapon",
  name: "Sword",
  damage: 2
}


  
  useEffect (() => {
    dispatch(createMob(newmob))
    dispatch(createMob(newmob2))
    dispatch(createPlayer(player))
    dispatch(changeView(newView))
    dispatch(createItem(item))
    dispatch(createItem(item2))
    dispatch(createItem(item3))
    dispatch(createItem(item4))
    
  }, [])


return null


}