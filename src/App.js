import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'
import POTD from './POTD'
import Show from './Show'





function App(props) {

  const [potd, setPOTD] = useState([])
  
  const closePOTD = () =>{
    setPOTD(null)
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
      {
      Array.from(potd).map(obj => {
        return <Show key={obj.date} potd = {potd}/>
      })
      }
      {
        potd && <POTD potd={potd} closePOTD={closePOTD}/>
      }

    </div>
  );
}

export default App;
