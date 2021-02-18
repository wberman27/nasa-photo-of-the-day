import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import POTD from './POTD'
import theme from './theme'
import styled, {keyframes} from 'styled-components'


const StyledPOTD = styled.div`
    color: ${props => props.theme.primaryColor};
    font-family: Monospace;
    background-color: darkgray;
    img{
      margin-top:5%;
      border-radius: 10px;
    }
    .explanation{
      &:hover p{
      background-color: ${props => props.theme.secondaryColor};
      border: 3px solid ${props => props.theme.white};
      border-radius: 5px;
      transition: 1s ease-in-out;
      transform: scale(1.1);
      padding:1%;
      }color:${props => props.theme.white};
    }
    transition: 1s ease-in-out;
    h1 { //animation - slides the header onto page from the left to the center
        position: absolute;
        left: -100%;
        width: 100%;
        animation: slide 2s forwards;
        color:black;
      }
    @keyframes slide{
      100% {left: 0; }
    }
    h2 {
      color:gold;
    }
    }
    button {
      &:hover{
        transform: scale(1.5);
        transition: .5s ease-in-out;
      }transition: .5s ease-in-out;
      margin-top:1%;
    }
`;


function App(props) {

  const [potd, setPOTD] = useState([]) //slice of state
  

  useEffect(() => {
    const fetchData = () =>{
      axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res =>{
        setPOTD(res.data) //sets potd to be the data from API 
      })
      .catch(err =>{
        console.log(err)
      })
    }
    fetchData();

  }, [])


  return (
    <StyledPOTD>
    <div className="App">
      <h1>
        NASA Photo Of The Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      {
        potd && <POTD potd={potd}/> //return onto page the POTD component if we have truthy potd. then pass POTD props
      }

    </div>
    </StyledPOTD>
  );
}

export default App;
