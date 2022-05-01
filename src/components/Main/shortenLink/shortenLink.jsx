import { Button } from "@mui/material";
import React from "react";

const ShortenLink = ({ link, handleOnClick }) => {

  return (
    <div className="shorten-link-list w-100">
      <ul className="list-ul ">
        {link.map((item) => {
          return (
            <li className="ul-li container d-flex flex-row justify-content-between align-items-center mb-3 px-4">
              <div className="li-link">
                <p className="link-p">{item.link}</p>
              </div>
              <div className="link-shorten d-flex flex-row">
                <p className="shorten-p px-4">{item.link}</p>
                <Button
                  className={`${item.copied ? "copied" : "" } shorten-copy`}
                  id={item.id}
                  variant="contained"
                  onClick={handleOnClick}
                  value={item.link}
                >
                    {item.copied ? "Copied!" : "Copy"}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShortenLink;
