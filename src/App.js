import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import POTD from './POTD'
import Expand from './Expand'
import theme from './theme'
import styled from 'styled-components'


const StyledPOTD = styled.div`
    color: ${props => props.theme.primaryColor};
    background-color: darkgray;
    &:hover .explanation p{
      background-color: ${props => props.theme.secondaryColor};
      transition: 5s ease-in-out;
    }
    transition: 5s ease-in-out;
    h1 {
      color:black;
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
