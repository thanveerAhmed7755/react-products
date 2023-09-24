import Header from "./Components/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Products from "./Components/Products";
import {CartProvider} from "./Components/CartsContext";
import Carts  from "./Components/Carts.jsx"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Logout from "./Components/Logout";
function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <div>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/authentication" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
