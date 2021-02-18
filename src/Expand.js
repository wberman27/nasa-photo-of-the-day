import React from "react";
import './POTD.css'

export default function Expand(){ //this function returns the button that will increase the width attribute of the image

 
    return(
        <div className='expand'>
            <button className = 'toggleButton' onClick = {(e) => document.querySelector('.hdUrl') && document.querySelector('.hdUrl').classList.toggle('big')}>
                Toggle Photo Size
            </button>
        </div>
    )
}

//return document.querySelector('.hdUrl').classList.remove('big');