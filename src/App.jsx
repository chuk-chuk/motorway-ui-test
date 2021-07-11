import React, { useEffect, useState } from "react";
import Card from "./components/Card"
import Form from "./components/Form"
import "./App.css";

const App = () => {
  const [images, setImages] = useState();
  const [showForm, setShowForm] = useState(false);

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

  return (
    <div className="app-container">
    <h2>Photo Gallery</h2>
    <button className="form-button" onClick={() => setShowForm(true)}>Fill in form</button>
      
      {showForm ? <Form /> : (
        <>
        {
        images && images.map(img => (
          <div key={img.id} className="card-container" >
            <Card imageData={img}/>
          </div>
        ))
      }
      </>
      )}
    </div>
  );
}

export default App;
