import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import './POTD.css'

export default function Expand(props){ //this function returns the button that will increase the width attribute of the image

    const {changeButton} = props

    useEffect(() =>{
        
        changeButton();

        return document.querySelector('.hdUrl').classList.remove('big');

    } ,[changeButton])
    

    return(
        <div className='expand'>
            <button onClick = {(e) => changeButton()}>
                Full Size Photo
            </button>
        </div>
    )
}