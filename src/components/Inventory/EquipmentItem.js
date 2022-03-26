import React from "react";
import { useDispatch } from "react-redux";


import { clearDrag, putItemInInventory, removeEquipment, startDragging } from "../../actions";



export const EquipmentItem = (item) => {

    
    const dispatch = useDispatch()
    
    const handleStartDrag = () => {
        dispatch(startDragging(item))
    }
    const handleDragStop = () => {
        

        const nodeList = document.querySelectorAll(":hover")
        

        let isInventory = false
        for (let i = 0; i < nodeList.length; i++) {
           if (nodeList[i].className === "stuff") {
               isInventory = true
           }

        }
        
        if (isInventory) {
            
            dispatch(putItemInInventory(item))
            dispatch(removeEquipment(item))
        } 
        dispatch(clearDrag())
        
    }


    return(
    <div draggable = "true" key={item.id} onDragStart = {handleStartDrag} 
    onDragEnd= {handleDragStop}>
        {item.name}</div>
    )
}