//Imports
import Navbar from './components/Navbar'
import Footer  from './components/Footer'

//Style Imports
import './App.css';

function App() {
  return (
    <div className="outerAppWrapper">
      <div className='innerAppWrapper'>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
