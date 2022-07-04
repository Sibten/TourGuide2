
import './App.css';

import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Components/JS/Home';
import Train from './Components/JS/Train';
import Place from './Components/JS/Place';
import Header from './Components/JS/Header';
import Footer from './Components/JS/Footer'
import Developer from './Components/JS/Developer';
import Serach from './Components/Sub-Components/JS/Serach';


function App() {
  return (  
    <BrowserRouter>
      <Header/>
      <Home/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/Train' element={<Train/>}/>
        <Route path='/Places' element={<Place/>}/>
        <Route path='/Devloper' element={<Developer/>}/>
        <Route path='/Places/Search' element={<Serach/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
