import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <MainNav/>
      <Outlet />
      <Footer/>
      
    </>
  );
};

export default Layout;
