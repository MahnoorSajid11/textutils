import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <div className="App" my-3>
    <Routes>
      <Route path="/" element={ <Navbar Title='TextUtills'/>}></Route>
      <Route path="/About" element={<div className="container my-3"><About/></div>}></Route>
      <Route path="/TextForm" element={ <div div className="container my-3"><TextForm heading = "Enter Text Below To Analyze"/></div> }></Route>
    </Routes>
</div>
</>
  );
}
export default App;
