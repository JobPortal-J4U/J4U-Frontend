import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../admin/components/Layout/SideNav";
;

const AdminLayout = () => {
  return (
    <>
      <SideNav/>
      <Outlet />
      
      
    </>
  );
};

export default AdminLayout;
