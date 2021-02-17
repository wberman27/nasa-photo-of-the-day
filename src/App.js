import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import POTD from './POTD'
import Show from './Show'





function App(props) {

  const [potd, setPOTD] = useState([])
  const [currentPOTD, setCurrentPOTD] = useState(null)
  
  const openPOTD = data => {
    setCurrentPOTD(data)
  }

  const closePOTD = () =>{
    setCurrentPOTD(null)
  }

  useEffect(() => {
    const fetchData = () =>{
      axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res =>{
        setPOTD(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }
    fetchData();

  }, [])


  return (
    <div className="App">
      <h1>
        NASA Photo Of The Day <span role="img" aria-label='go!'>🚀</span>
      </h1>
      {potd.map(obj => {
        return <Show key={obj.id} openPOTD = {openPOTD}/>
      })}
      {
        currentPOTD && <POTD potd={currentPOTD} close={closePOTD} />
      }

    </div>
  );
}

export default App;
