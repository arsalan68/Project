import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{height:"100px"}}>
        <Navbar />
        </div>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
