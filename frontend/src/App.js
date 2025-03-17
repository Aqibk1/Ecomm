
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Pages/Product';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mens" element={<Category category="men"/>}/>
            <Route path="/women" element={<Category category="women"/>}/>
            <Route path="/kids" element={<Category category="kids"/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
          </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
