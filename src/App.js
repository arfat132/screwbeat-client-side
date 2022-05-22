import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './shared/Navbar';
import SubNavbar from './shared/SubNavbar';
function App() {
  return (
    <div className="App">
      <SubNavbar></SubNavbar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </div>
  );
}

export default App;
