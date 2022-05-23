import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './shared/Navbar';
import SubNavbar from './shared/SubNavbar';
import Footer from './shared/Footer';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';


function App() {
  return (
    <div>
      <SubNavbar></SubNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
