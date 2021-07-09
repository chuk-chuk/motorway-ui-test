import React, { useEffect, useState } from "react";
import AvatarPicture from "./components/AvatarPicture"
import MainPicture from "./components/MainPicture"
import "./App.css";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleOnClick = () => {}

  return (
    <div className="wrapper">
    <h2>Gallery</h2>
      {
        images && images.map(img => (
          <div key={img.id} >
            <AvatarPicture data={img} />
            <p>{img.user.username}</p>
            <MainPicture data={img} onClick={handleOnClick}/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
