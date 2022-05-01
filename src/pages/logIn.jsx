import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.scss";
import $ from "jquery";

const LoginPage = () => {
  const [userProfile, setUserProfile] = useState({
    userName: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm();

  const [loginState, setLoginState] = useState(false);

  const onSubmit = (data, e) => {
    reset({ userName: "", password: "" });
    if (!loginState) {
      $(".user-not-found").css("opacity", "10");
      setTimeout(() => {
        $(".user-not-found").css("opacity", "0");
      }, 5000);
    }
  };

  useEffect(() => {
    setFocus("userName");
  }, [setFocus]);

  return (
    <div className="login-page h-100 w-100">
      <div className="back-to-home">
        <button className="back-to-home-button" placeholder="Back to home">
          <a className="button-a" href="/">Back to home</a>
        </button>
      </div>
      <div className="user-not-found d-flex align-items-center justify-content-center">
        <p>OOOPS! User not found</p>
      </div>
      <article className="login-page-main container d-flex flex-column">
        <form className="main-form col-6 p-5" onSubmit={handleSubmit(onSubmit)}>
          <section className="form-inputs d-flex flex-column">
            <input
              type="text"
              className={`input-user-name my-3 ${
                errors.userName && "inputs-error"
              }`}
              placeholder="Username"
              defaultValue={userProfile.userName}
              onChange={(e) =>
                setUserProfile({ ...userProfile, userName: e.target.value })
              }
              {...register("userName", {
                required: "Username is required",
              })}
            />
            {errors.userName && (
              <p className="error">{errors.userName.message}</p>
            )}
            <input
              type="password"
              className={`input-password my-3 ${
                errors.password && "inputs-error"
              }`}
              placeholder="Password"
              onChange={(e) => {
                setUserProfile({ ...userProfile, password: e.target.value });
              }}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Min length is 3",
                },
                maxLength: {
                  value: 8,
                  message: "max length is 8",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </section>
          <section className="form-button">
            <button type="submit" className="input-button w-100 my-3">
              LOGIN
            </button>
          </section>
        </form>
      </article>
    </div>
  );
};

export default LoginPage;
