import React, { useEffect } from "react";
import loadingIcon from "./images/paw-1.1s-207px.svg";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <img src={loadingIcon} alt="" />
        <h1>Loading...</h1>
      </div>
    </>
  );
};

export default Loading;
