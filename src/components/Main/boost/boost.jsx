import { Button } from "@mui/material";
import style from "./style.scss";

const Boost = () => {

  const clickToScroll = () => {
      window.scrollTo({
          top: 700,
          behavior: "smooth"
      })
  };

  return (
    <section className="boost d-flex align-items-center justify-content-center">
      <div className="boost-inside d-flex align-items-center flex-column">
        <div className="inside-text">
          <h1 className="text-h">Boost Your links today</h1>
        </div>
        <Button className="inside-button mt-4" onClick={clickToScroll}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Boost;
