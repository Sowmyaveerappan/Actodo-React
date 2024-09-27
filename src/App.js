

import Header from "./components/Header.jsx"
import Card from "./components/card.jsx"
import Todocontainer from './components/Todocontainer.jsx';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./pages/login.jsx"
import Signup from "./pages/signup.jsx"
import Landing from "./pages/landing.jsx"
import { useState } from 'react';




function App(){

  const [users, setusers]= useState(
    [
           {
              username:"Sowmya",
              password:"123"
           },
           {
            username:"Ramya",
              password:"123"
           }
   
   ]
   )
  return(
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/Landing' element={<Landing />}></Route>

        
      </Routes>
    </BrowserRouter>

  </div>
  )
}



export default App
