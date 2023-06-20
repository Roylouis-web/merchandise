// Layout component that renders the shared components of the web app

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
};