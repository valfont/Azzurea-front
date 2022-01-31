import React from "react";
import stTrop1 from "../assets/svg/stTrop1.svg";
import stTrop2 from "../assets/svg/stTrop2.svg";
import stTrop3 from "../assets/svg/stTrop3.svg";
import stTrop4 from "../assets/svg/stTrop4.svg";
import stTrop5 from "../assets/svg/stTrop5.svg";
import stTrop6 from "../assets/svg/stTrop6.svg";

const Grid3 = () => {
  return (
    <div className="marginAuto">
      <div className="grid3">
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop1} />
          </div>
        </div>
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop2} />
          </div>
        </div>
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop3} />
          </div>
        </div>
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop4} />
          </div>
        </div>
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop5} />
          </div>
        </div>
        <div>
          <div className="cards">
            <img className="img-grid" src={stTrop6} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Grid3;
