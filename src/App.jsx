import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import Grocery from "./pages/Grocery";
import PhonesAndTablets from "./pages/PhonesAndTablets";
import Computing from "./pages/Computing";
import Electronics from "./pages/Electronics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import "./styles/App.css";
import "./server/server";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductsDetails";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="products" element={<Products />}>
                      <Route index element={<Grocery />} />
                      <Route path="phones-and-tablets" element={<PhonesAndTablets />} />
                      <Route path="computing" element={<Computing />} />
                      <Route path="electronics" element={<Electronics />} />
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