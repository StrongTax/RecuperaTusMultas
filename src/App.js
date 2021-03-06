import React from 'react';
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import './App.css'


const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {

  return (
    <>
    {
      <Suspense fallback={null}>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Home />
    </Suspense>
  
    }
    </>
  );
}

export default App;