import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((Response)=>{
      setCount(Response.data);
    })

  
  },[])
  return <>
  {
    count.map((e)=>(
      <h1>{e.name}</h1>
    ))
  }
</>
}

export default App
