import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import POTD from './POTD'
import './POTD.css'

export default function Expand(){
    return(
        <div className='expand'>
            
            <button onClick={(e) => 
                document.querySelector('.hdurlsmall').className === 'hdurl'
                }>           
                Expand
            </button>
        </div>
    )
}