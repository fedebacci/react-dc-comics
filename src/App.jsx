import { useState } from 'react';

// # IMPORTO COMPONENTI
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

// # IMPORTO DATI
import comicsData from '../src/assets/js/data/comics';

export default function App() {
  return (
    <>
      <Header />
      <Main comicsData={comicsData} />
      <Footer />
    </>
  );
};
