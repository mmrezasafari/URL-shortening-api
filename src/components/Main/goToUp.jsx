import zIndex from "@mui/material/styles/zIndex";

const GoToUp = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="go-to-up"
      onClick={goToTop}
      style={{ position: "fixed", bottom: "20px", right: "30px", zIndex: "99" }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8543 11.9741L16.2686 10.5599L12.0259 6.31724L7.78327 10.5599L9.19749 11.9741L11.0259 10.1457V17.6828H13.0259V10.1457L14.8543 11.9741Z"
          fill="hsl(180, 66%, 49%)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5C2.79086 1 1 2.79086 1 5V19ZM5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
          fill="hsl(180, 66%, 49%)"
        />
      </svg>
    </div>
  );
};

export default GoToUp;
