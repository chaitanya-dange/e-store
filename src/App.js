import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import About from './pages/About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
             <Route path='/about' element={<About/>}/>
             <Route  path='/contactus' element={<ContactUs/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
