import React from 'react'
import Form from './pages/Form'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Participants from './pages/Participants'
const App = () => {
  return (
    <BrowserRouter>
    <div >
      <Navbar />
      <Routes>
      <Route path='/eventadder/' element={<Home />} />
      <Route path='/eventadder/register' element={<Form />} />
      <Route path='/eventadder/event-adder' element={<Event />} />
      <Route path='/eventadder/participants' element={<Participants />} />
      </Routes>
      </div>
      </BrowserRouter>
    
  )
}

export default App
