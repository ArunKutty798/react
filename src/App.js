import React from 'react'
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import About from './pages/about/about';
import Contact from './pages/Contact/Contact';
import Home from './pages/home/home';
import Services from './pages/Services/Services';
import Header from "./pattern/header/header";


const App = () => {
  return (
    <>
   
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}>
        
      </Route>
      <Route path='/about' element={<About/>}>
      
      </Route>
      <Route path='/Services' element={<Services/>}>
       
      </Route>
      <Route path='/Contact' element={<Contact/>}>
    
      </Route>
      </Routes>
 
    </>
  )
}

export default App


