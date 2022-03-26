import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./PlayArea.css"

export const PlayArea = () => {

    const view =  useSelector ((state) => state.view.payload.playArea)
    const positions = useSelector((state) => state.positions.payload)
    const areaPositions = positions.map((element) => {
        
        
        const classposition = "playarea-" + `${element.positionY}` + `${element.positionX}`

        return <div className={classposition} key = {element.id}>{element.name}</div>

    }
    )
    
    if (view === true) {
    return (
        <div>
            <div className="playarea-container">{areaPositions}</div>
        </div>
    )
    } else return null
}