import React from "react";
import Cards from "../Cards/Cards";
import NavPage from "../NavPage";
import ImagesGallery from "../Image-gallery/ImagesGallery";
import "./MainDash.css";


const MainPage = () => {
  return (
    <div className="MainPage">
      <Cards />
      <NavPage/>
      <ImagesGallery/>
    </div>


  );
};

export default MainPage;
