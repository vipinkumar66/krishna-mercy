import React from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom'
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <section className='dark:bg-[#040D12]'>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home/>} />
        <Route path="/" element = {<Home/>} />
      </Routes>
      </section>
    </Router>
  );
};


export default App