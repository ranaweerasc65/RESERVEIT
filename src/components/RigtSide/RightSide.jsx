import React from "react";

import Softwares from "../AvailableSoftwares/AvailableSoftwaress";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">

      <div>
        <h3>New CC</h3>
        <Softwares />
      </div>
      <div>
        <h3>Old CC </h3>
        <Softwares />
      </div>
    </div>

    
  );
};

export default RightSide;
