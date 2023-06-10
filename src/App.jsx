import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Phones from "./pages/Phones";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Computing from "./pages/Computing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import './server/server';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<Products />}>
                  <Route index element={<Grocery />} />
                  <Route path="phones" element={<Phones />} />
                  <Route path="electronics" element={<Electronics />} />
                  <Route path="computing" element={<Computing />} />             
              </Route>
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
          </Route>
       </Routes>
    </BrowserRouter>
  );
};