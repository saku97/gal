import React from "react";
import PhotoGallery from "./photogallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Photo Gallery</h1>
      </header>
      <main className="main-container">
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;
