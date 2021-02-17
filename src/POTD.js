import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'

export default function POTD(props){
    const { potd, close } = props

    return (
        <div className = 'container'>
            {
                potd &&
                <>
                {potd.hdurl}
                <p>{potd.copyright} {potd.date}</p>
                <p>{potd.title}</p>
                <p>{potd.explanation}</p>
                </>
            }
        </div>
    )
}