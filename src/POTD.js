import React  from "react";
import Expand from './Expand'
import './POTD.css'

export default function POTD(props){
    const { potd } = props //set props, from App

    return (
        <div className = 'container'>
            { //display on page if potd is truthy
              //Expand is returned here for the expand button
                potd &&
                <>
                
                <div className = 'hdUrl'>
                    <img src={potd.hdurl} alt={potd.title}></img>
                </div>
                {<Expand />}
                
                <p>{potd.copyright} {potd.date}</p>
                <p>{potd.title}</p>
                <div className = 'explanation'>
                    <p>{potd.explanation}</p>
                </div>
                </>
            }
        </div>

    )
}