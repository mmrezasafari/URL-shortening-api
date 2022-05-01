import style from "./mainStyle.scss";
import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import ShortenLink from "./shortenLink";

const ShortenBar = () => {
  const [link, setLink] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnClick = (data) => {
    setLink((oldValue) => [
      ...oldValue,
      {
        id: link.length + 1,
        link: data.link,
        copied: false,
      },
    ]);
  };

  const handleToggle = (e) => {
    let mapped = link.map((item) => {
        return item.id == e.target.id
        ? {...item, copied : !item.copied}
        : {...item, copied : false}
    })
    setLink(mapped);
    
    navigator.clipboard.writeText(e.target.value)
};


  return (
    <section className="shorten-bar container d-flex flex-column align-items-center">
      <div className="shorten-bar-main-1 container w-100 d-flex align-items-center mb-4">
        <div className="shorten-bar-main container d-flex flex-row justify-content-center">
          <div className="main-input col-9">
            <input
              type="text"
              className={`input-input w-100 h-100 ${
                errors.link ? "input-error" : ""
              }`}
              placeholder="Shorten a link here..."
              {...register("link", {
                required: "Please add a link",
              })}
            />
            {errors.link && <p className="error">{errors.link.message}</p>}
          </div>
          <div className="main-button col-2 d-flex justify-content-center">
            <Button
              className="button-button w-75 h-100"
              variant="contained"
              onClick={handleSubmit(handleOnClick)}
            >
              shorten it!
            </Button>
          </div>
        </div>
      </div>
        <ShortenLink link={link} handleOnClick={handleToggle}  />
    </section>
  );
};

export default ShortenBar;
