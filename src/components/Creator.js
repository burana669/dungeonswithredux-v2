
import {useDispatch} from "react-redux"
import {createMob, createPlayer, changeView} from "../actions"

export const Creator = (props) => {

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
    name: "@",
    damage: 1,
    health: 100,
    positionX: 2,
    positionY: 4
}

const newView = {
    inventory: false,
    playArea: true,
    

}

dispatch(createMob(newmob))
dispatch(createMob(newmob2))
dispatch(createPlayer(player))
dispatch(changeView(newView))

return null


}