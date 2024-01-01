import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Error from './Components/Error';
import Product from './Components/Product';
function App() {
  return (
 <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/*" element={<Error/>}/>
    <Route path="/addcart" element={<Product/>} />
  </Routes>
  </BrowserRouter>

 
 </div>
  );
}

export default App;
