import style from "./style.scss"

const Card = ({ title , imgSrc }) => {
  return (
    <div className={`card-main ${title}`} >
      <div className="card-logo d-flex align-items-center justify-content-center">
        <img className="img-logo" src={imgSrc}></img>
      </div>
      <div className="card-text">
        <h2 className="text-h">{title}</h2>
        <p className="text-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iste
          explicabo repellat incidunt possimus pariatur.
        </p>
      </div>
    </div>
  );
};

export default Card ;
