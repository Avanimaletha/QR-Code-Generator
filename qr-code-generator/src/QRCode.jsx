import React, { useState } from 'react';
import './QRCode.css'; 

const QRCode = () => {
  const [url, setUrl] = useState('');
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL to generate QR Code"
          />
          <br />
          <input type="submit" value="Generate QR Code" />
        </div>
      </form>
      {show && (
        <div className="qr-box">
          <img
            src={`https://quickchart.io/qr?text=${encodeURIComponent(url)}&size=500x500`}
            alt="QR Code"
          />
        </div>
      )}
    </div>
  );
};

export default QRCode;
