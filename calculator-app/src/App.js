import React, { useState } from 'react'
import './App.css';
import Keypad from './keypad';


function App() {

  let [input,setinput] = useState("56");

function handleclick(value){

  setinput(input+value);

}


  return (
    <div className='container'>
      <h1 >calculator using react</h1>
    <div className='calculator'>
      <input type='text' value={input} className='output' />
      <Keypad handleclick={handleclick}/>
    </div>
    </div>
  )
}

export default App