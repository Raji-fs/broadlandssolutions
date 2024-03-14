import React from 'react';
import Head from 'next/head';
import "../app/globals.css";
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
          <title>Broadlands Solutions</title>
          <link rel="icon" href='/icon.png' />
      </Head>
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
