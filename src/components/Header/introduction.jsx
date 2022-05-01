import { Button } from "@mui/material";
import React from "react";
import illustrateImage from "./illustration-working.svg"

const Introduction = () => {

  const clickToScroll = () => {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
};

  return (
    <section className="introduction d-flex flex-row mt-5 ">
      <article className="introduction-text container d-flex flex-column justify-content-center">
        <div className="text-header">
          <h1 className="header-text">More than  just shorter links</h1>
        </div>
        <div className="text-main">
          <p className="main-text">
            Build your brands recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
        <Button className="button mt-3" variant="contained" onClick={clickToScroll}>Get Started</Button>
      </article>
      <figure className="introduction-image position-relative">
        <img className="image-img" src={illustrateImage} alt="illustrate-img" />
      </figure>
    </section>
  );
};

export default Introduction;
