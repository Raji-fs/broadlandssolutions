import React from 'react';
import "../app/globals.css";
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
