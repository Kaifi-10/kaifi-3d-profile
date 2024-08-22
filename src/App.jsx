import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'
import Contact from './Components/Pages/Contact'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App