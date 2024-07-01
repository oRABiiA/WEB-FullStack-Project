import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [];
  for (let i = 0; i < 20; i++) {
    images.push(
      <div key={i} className="image-container">
        <img
          src={`https://picsum.photos/id/${i}/50/50`}
          alt={`Placeholder ${i}`}
          onClick={() => {
            setSelectedImage(`https://picsum.photos/id/${i}/604/604`);
            setSelectedIndex(i); // i - 1 to match the array index
          }}
          className={`thumbnail ${selectedIndex === i ? "selected" : ""}`}
        />
        {selectedIndex === i && (
          <div className="svg-container">
            <svg
              className="svg-icon left-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => {
                if (selectedIndex > 0) {
                  setSelectedImage(`https://picsum.photos/id/${selectedIndex - 1}/604/604`);
                  setSelectedIndex(selectedIndex - 1);
                }
                if(selectedIndex === 0){
                  setSelectedImage(`https://picsum.photos/id/${images.length - 1}/604/604`);
                  setSelectedIndex(images.length - 1);
                }
              }}
            >
              <path d="M64 128l177.6 0c-1 5.2-1.6 10.5-1.6 16l0 16-32 0L64 160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 16c0-17.7 14.3-32 32-32c0 0 0 0 0 0l24 0c66.3 0 120 53.7 120 120l0 48c0 52.5-33.7 97.1-80.7 113.4c.5-3.1 .7-6.2 .7-9.4c0-20-9.2-37.9-23.6-49.7c4.9-9 7.6-19.4 7.6-30.3c0-15.1-5.3-29-14-40c8.8-11 14-24.9 14-40l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-40zm32-80s0 0 0 0c-18 0-34.6 6-48 16L64 80C28.7 80 0 108.7 0 144s28.7 64 64 64l82 0c-1.3 5.1-2 10.5-2 16c0 25.3 14.7 47.2 36 57.6c-2.6 7-4 14.5-4 22.4c0 20 9.2 37.9 23.6 49.7c-4.9 9-7.6 19.4-7.6 30.3c0 35.3 28.7 64 64 64l64 0 24 0c92.8 0 168-75.2 168-168l0-48c0-92.8-75.2-168-168-168l-24 0zM256 400c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0zM240 224c0 5.5 .7 10.9 2 16l-2 0-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0 16zm24 64l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l24 0z" />
            </svg>
            <svg
              className="svg-icon right-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={() => {
                if (selectedIndex < images.length - 1) {
                  setSelectedImage(`https://picsum.photos/id/${selectedIndex + 1}/604/604`);
                  setSelectedIndex(selectedIndex + 1);
                }
                if (selectedIndex === images.length - 1) {
                  setSelectedImage(`https://picsum.photos/id/${0}/604/604`);
                  setSelectedIndex(0);
                }
              }}
            >
              <path d="M448 128l-177.6 0c1 5.2 1.6 10.5 1.6 16l0 16 32 0 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM224 144c0-17.7-14.3-32-32-32c0 0 0 0 0 0l-24 0c-66.3 0-120 53.7-120 120l0 48c0 52.5 33.7 97.1 80.7 113.4c-.5-3.1-.7-6.2-.7-9.4c0-20 9.2-37.9 23.6-49.7c-4.9-9-7.6-19.4-7.6-30.3c0-15.1 5.3-29 14-40c-8.8-11-14-24.9-14-40l0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 0-40zM192 64s0 0 0 0c18 0 34.6 6 48 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-82 0c1.3 5.1 2 10.5 2 16c0 25.3-14.7 47.2-36 57.6c2.6 7 4 14.5 4 22.4c0 20-9.2 37.9-23.6 49.7c4.9 9 7.6 19.4 7.6 30.3c0 35.3-28.7 64-64 64l-64 0-24 0C75.2 448 0 372.8 0 280l0-48C0 139.2 75.2 64 168 64l24 0zm64 336c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0zm16-176c0 5.5-.7 10.9-2 16l2 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0 16zm-24 64l-40 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-24 0z" />
            </svg>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <p className="title">Image Catalog</p>
      <div className="row">
        {images.slice(0, 10).map((image, index) => (
          <div key={index} className="image-container">
            {image}
          </div>
        ))}
      </div>
      <div className="row">
        {images.slice(10, 20).map((image, index) => (
          <div key={index} className="image-container">
            {image}
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="selected-image-container">
          <img src={selectedImage} alt="Selected" className="selected-image" />
        </div>
      )}
    </div>
  );
};
export default App;