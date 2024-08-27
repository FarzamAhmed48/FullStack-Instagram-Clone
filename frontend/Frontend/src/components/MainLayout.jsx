import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const MainLayout = () => {
  return (
    <div>
      <LeftSidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
