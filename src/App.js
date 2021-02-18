import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import POTD from './POTD'
import Expand from './Expand'





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



  const changeButton = () =>{
    const photoDiv = document.querySelector('.hdUrl')
    photoDiv.classList.add('big')
  }







  return (
    <div className="App">
      <h1>
        NASA Photo Of The Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      {<Expand changeButton = {changeButton}/>}
      {
        potd && <POTD potd={potd}/> //return onto page the POTD component if we have truthy potd. then pass POTD props
      }

    </div>
  );
}

export default App;
