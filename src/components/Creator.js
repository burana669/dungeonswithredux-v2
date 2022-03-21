

import { useDispatch} from "react-redux"
import { useEffect } from "react"
import {changeView} from "../actions"
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
    damage: 4,
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
    Inventory: false,
    PlayArea: true,
    

}

  
  useEffect (() => {
    dispatch(createMob(newmob))
    dispatch(createMob(newmob2))
    dispatch(createPlayer(player))
    /* dispatch(changeView(newView)) */
    
  }, [])


return null


}