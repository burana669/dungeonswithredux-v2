import React from "react";
import { useSelector } from "react-redux";
import { stringify } from "uuid";
import "./PlayArea.css"

export const PlayArea = () => {

    const positions = useSelector((state) => state.PlayAreaReducer)

    const areaPositions = positions.map((element) => {
        
        
        const classposition = "playarea-" + `${element.positionY}` + `${element.positionX}`

        return <div className={classposition}>{element.name}</div>

    }
    )
    return (
        <div>
            <div className="playarea-container">{areaPositions}</div>
        </div>
    )
}