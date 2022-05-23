import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './shared/Navbar';
import SubNavbar from './shared/SubNavbar';
import Footer from './shared/Footer';
function App() {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
