import React from "react";
import style from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div>
        <h1>Loading...</h1>
      </div>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loading;
