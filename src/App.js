import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import About from './pages/About'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ContactUs from './pages/ContactUs';
import DashBoard from './pages/user/DashBoard';
import  Profile  from './pages/user/Profile';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          
             <Route path='/about' element={<About/>}/>
             <Route  path='/contactus' element={<ContactUs/>}/>


             <Route path='/user' element={<DashBoard/>}>
                <Route path='profile' element={<Profile/>}/>
             </Route>

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
