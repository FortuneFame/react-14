import React from 'react';
import { Outlet } from 'react-router-dom';

import { Provider } from 'react-redux';
import myStore from './store';

import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <Provider store={myStore}>
      <Header />
      <main style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Outlet />
      </main>
      <Footer />
    </Provider>
  );
};

export default App;