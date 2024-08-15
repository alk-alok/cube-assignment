import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerDetails.css";

const CustomerDetails = ({ customer }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!customer) return;

    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?count=9&client_id=hqGCRCOzkuuHMPe1ZRcwy0GYqbEQh876vNS51Xf-1yw"
        );
        // I have used unsplash API its limit is 50 images per hour only
        setPhotos(response.data.map((photo) => photo.urls.small));
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();

    const intervalId = setInterval(fetchPhotos, 10000);

    return () => clearInterval(intervalId);
  }, [customer]);

  if (!customer) {
    return (
      <div className="customer-details">
        <h1>Please select a customer to view details.</h1>
        <p>Important: I have used unsplash free API so its limit is 50 images per hour. After that it will show null</p>
      </div>
    );
  }

  return (
    <div className="customer-details">
      <h2 className="customer-name">{customer.name}</h2>
      <p className="customer-address">{customer.address}</p>
      <p className="customer-title">{customer.title}</p>
      <div className="photo-grid">
        {photos.slice(0, 9).map((photo, index) => (
          <img key={index} src={photo} alt={`Customer ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
