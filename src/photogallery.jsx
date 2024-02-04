import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?query=${searchQuery}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for photos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="photo-gallery">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description || "Photo"}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
