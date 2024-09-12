import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout;
