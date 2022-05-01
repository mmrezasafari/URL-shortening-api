import NavBar from "../components/Header/navBar";
import Introduction from "../components/Header/introduction";
import ShortenBar from "../components/Main/shortenLink/shortenBar";
import Advanced from "../components/Main/advanced/advanced";
import Boost from "../components/Main/boost/boost";
import Footer from "../components/Footer/footer";
import GoToUp from "../components/Main/goToUp";
import React, { useState, useEffect } from "react";
import "./style.scss"

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <header className="header pt-4">
        <NavBar />
        <Introduction />
      </header>
      <main className="main">
        <ShortenBar />
        <Advanced />
        <Boost />
      </main>
      <footer className="footer">
        <Footer />
        {showTopBtn && <GoToUp scrolled={showTopBtn} />}
      </footer>
    </>
  );
};

export default Home;
