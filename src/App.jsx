
import './App.css'

import Header from './Components/Global/Header'
import Footer from './Components/Global/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Schedule from './Components/Pages/Schedule'
import Speakers from './Components/Pages/Speakers'
import Venue from './Components/Pages/Venue'
import Contact from "./Components/Pages/Contact"

import {Route, Routes} from "react-router-dom";    // routing k liye import kiya hai or main.jsx me bhi ek import kerne ka pehele "npm i react-router-dom" terminal me install kerneka "import { BrowserRouter } from "react-router"; "  ye main.jsx me likh ne ka or ye <BrowserRouter> <App /> </BrowserRouter>,


function App() {


  return (
    <>
    
     <Header/>
   

      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/About" element={<About/>}/>
           <Route path="/schedule" element={<Schedule/>}/>
           <Route path="/speakers" element={<Speakers/>}/>
           <Route path="/venue" element={<Venue/>}/>
           <Route path="/contact" element={<Contact/>}/>

      </Routes>

        <Footer/>
     
     
    </>
  )
}

export default App
