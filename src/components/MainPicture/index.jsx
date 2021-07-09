import React from "react";
import "./styles.css";

const MainPicture = ({ data, onClick }) => {
  return (
    <picture>
      <source srcSet={`${data.url}.webp`} type="image/webp" />
      <source srcSet={`${data.url}.jpg`} type="image/png" />
      <img src={data.url} alt={data.alt_description} className="main-image" onClick={onClick}/>
    </picture> 
  );
}

export default MainPicture;
