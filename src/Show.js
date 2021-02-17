import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import POTD from './POTD'


export default function Show(props){
const {openPOTD} = props

    return(
        <div className='show'>
        {props}
        <button onClick={() => openPOTD(props)}>
            Explore
        </button>
        </div>
    )

}