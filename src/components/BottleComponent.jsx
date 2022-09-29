import React from "react";
import "./bottle.css";
import "./water.css";
import Logo from "../logo.png";

const BottleComponent = (props) => {
  const { water } = props;
  console.log("bottle", water);
  return (
    <>
      <div className="bottle yellow">
        <div className="bottle_top">
          <div className="bottle_mouth">
            <div className="highlight"></div>
          </div>
        </div>
        <div className="bottle_neck">
          <div className="highlight"></div>
        </div>
        <div className="bottle_main">
          <div className="bottle_inner">
            <img src={Logo} alt="image"></img>
            <div className={`water${water}`}></div>
          </div>
          <div className="highlight"></div>
        </div>
      </div>
    </>
  );
};

export default BottleComponent;
