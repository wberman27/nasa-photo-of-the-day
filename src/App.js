import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants'
import axios from 'axios'






function App() {
  

  useEffect(() => {
    const fetchData = () =>{
      axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res =>{
        console.log(res)
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



    </div>
  );
}

export default App;
