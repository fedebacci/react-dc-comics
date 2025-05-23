import { useState } from 'react';

// # IMPORTO COMPONENTI
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

// # IMPORTO DATI
import logoData from "./assets/js/data/logoData"
import mainMenuData from "./assets/js/data/mainMenu"
import comicsData from './assets/js/data/comics';
import footerMenusData from "./assets/js/data/footerMenus"
import footerSocialData from "./assets/js/data/footerSocial"

export default function App() {
  return (
    <>
      <Header logoData={logoData} mainMenuData={mainMenuData} />
      <Main comicsData={comicsData} />
      <Footer footerMenusData={footerMenusData} footerSocialData={footerSocialData} />
    </>
  );
};
