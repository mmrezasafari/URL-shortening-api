import style from "./style.scss"
import Card from "./card";
import detailImg from "./icon-detailed-records.svg";
import brandImg from "./icon-brand-recognition.svg";
import fullyImg from "./icon-fully-customizable.svg"

const Advanced = () => {
  return (
    <section className="advanced container">
      <div className="advanced-header col-12 d-flex justify-content-center">
        <div className="header-text col-6">
          <h1 className="text-h text-center">Advanced Statistics</h1>
          <p className="text-p text-center">
            Track how your links are performing across the web with our advanced
            Statistics dashboard
          </p>
        </div>
      </div>
      <div className="advance-card container d-flex flex-row align-items-center">
        <Card title={"Brand Recognition"} imgSrc={brandImg} />
        <hr/>
        <Card title={"Detailed Records"} imgSrc={detailImg} />
        <hr/>
        <Card title={"Fully Customizable"} imgSrc={fullyImg} />
      </div>
    </section>
  );
};

export default Advanced;
