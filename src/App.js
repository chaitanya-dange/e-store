import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import About from './pages/About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import DashBoard from './pages/user/DashBoard';
import  Profile  from './pages/user/Profile';
import NavBar from './components/NavBar';
import Services from './pages/Services';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>

             <Route path='/about' element={<About/>}/>
             <Route  path='/contactus' element={<ContactUs/>}/>
             <Route  path='/services' element={<Services/>}/>



             <Route path='/user' element={<DashBoard/>}>
                <Route path='profile' element={<Profile/>}/>
             </Route>

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
