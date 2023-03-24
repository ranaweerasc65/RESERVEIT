import React from "react";
import "./AvailableSoftwares.css";

const AvailableSoftwares = () => {
  const softwareList = ['Adobe Photoshop', 'Matlab','Python','BricsCAD','CATIA','Mathematica','SimScale','Microsoft Word', 'Zoom', 'Slack', 'Google Chrome'];

  return (
    <div className="Softwares">

      <ul>
        {softwareList.map((software) => (
          <li key={software}>{software}</li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSoftwares;
