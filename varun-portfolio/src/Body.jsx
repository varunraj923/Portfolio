import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Header from './Header';
import Footer from './Footer';

const Body = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the child route components */}
      </main>
      <Footer />
    </div>
  );
};

export default Body;

