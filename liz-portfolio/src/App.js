//Imports
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer  from './components/Footer'

//Style Imports
import './App.css';

function App() {
  return (
    <div className="outerAppWrapper">
      <div className='innerAppWrapper'>
        <Navbar />
        <Header />
          <Routes>
            <Route path='/' exact element={<About />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
