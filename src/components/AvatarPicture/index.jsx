import React from "react";
import "./styles.css";

const AvatarPicture = ({ data }) => {
  return (
    <picture>
      <source srcSet={`${data.user.profile_image}.webp`} type="image/webp" />
      <source srcSet={`${data.user.profile_image}.jpg`} type="image/png" />
      <img className="image" src={data.user.profile_image} alt="avatar" />
    </picture>
  );
}

export default AvatarPicture;
