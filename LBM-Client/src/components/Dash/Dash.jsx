import React from "react";
import Slider from "../Slider/Slider";
import VertSlider from "../VertSlider/VertSlider";
import Mint from "../Mint/Mint";
import style from "./Dash.module.scss";

function Dash() {
  return (
    <div className={style.Container}>
      <Slider />
      <VertSlider />
      <Mint />
    </div>
  );
}

export default Dash;