import React from "react";
import { useDispatch } from "react-redux";


import { clearDrag, equipItem, putItemInInventory, removeInventoryItem, startDragging } from "../../actions";



export const InventoryItem = (item, equipment) => {

    
    const dispatch = useDispatch()
    
    const handleStartDrag = () => {
        dispatch(startDragging(item))
    }
    const handleDragStop = () => {
       

        const nodeList = document.querySelectorAll(":hover")
        

        let hasEquipment = false
        for (let i = 0; i < nodeList.length; i++) {
           if (nodeList[i].className === "equipment") {
               hasEquipment = true
           }

        }
        
        if (hasEquipment) {
            if (equipment[item.type].occupied === true){
                
                dispatch(putItemInInventory(equipment[item.type].payload))
            }
            dispatch(equipItem(item))
            dispatch(removeInventoryItem(item))
        } 
        dispatch(clearDrag())
        
    }


    return(
    <div draggable = "true" key={item.id} onDragStart = {handleStartDrag} 
    onDragEnd= {handleDragStop}>
        {item.name}</div>
    )
}