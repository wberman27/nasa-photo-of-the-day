import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import Show from './Show'
import App from "./App";
import './POTD.css'

export default function POTD(props){
    const { potd, closePOTD } = props

    return (
        <div className = 'container'>
            {
                potd &&
                <>
                <img src={potd.hdurl} alt={potd.title}></img>
                <p>{potd.copyright} {potd.date}</p>
                <p>{potd.title}</p>
                <p>{potd.explanation}</p>
                </>
            }
        </div>
    )
}