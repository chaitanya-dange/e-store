import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import About from './components/About'


function App() {
  return (
    <>
    <Button variant="primary">Primary</Button>
    {new Date().toString()}
    <About title={"this is about awesome===  "}  descs={"just playing with random stuff===  "} desc={"12345===  "}/>
    </>
  );
}

export default App;
