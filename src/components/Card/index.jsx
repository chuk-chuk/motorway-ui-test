import React from "react";
import AvatarPicture from "../AvatarPicture";
import MainPicture from "../MainPicture";
import "./styles.css";

const Card = ({ imageData }) => {
  const handleOnClick = () => {}
  return (
    <div className="wrapper">
      <div className="user-info">
        <AvatarPicture data={imageData} />
        <p>{imageData.user.username}</p>
      </div>
      <MainPicture data={imageData} onClick={handleOnClick}/>
    </div> 
  );
}

export default Card;
