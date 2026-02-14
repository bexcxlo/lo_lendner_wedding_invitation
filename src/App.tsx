import React, { useState } from 'react';
import './App.css';
import invitation from './images/invitation.png'
import details from './images/details.png'
import rsvp from './images/rsvp.png'

function App() {
  const [focusedImage, setFocusedImage] = useState<string | null>(null);
  
  const handleImageClick = (image: string) => {
    setFocusedImage(image);
  };

  const handleCloseModal = () => {
    setFocusedImage(null);
  };

  const handleRsvpClick = () => {
    window.open('https://zola.com/wedding/rebekahandyovel/rsvp', '_blank');
  };

  return (
    <div className="App">
      <header className="site-header">
        REBEKAH &amp; YOVEL
      </header>
      <main className="cards-container">
        <div className="top-row">
          <img 
            src={invitation}
            alt="Wedding Invitation"
            onClick={() => handleImageClick(invitation)}
          />
          <img 
            src={details}
            alt="The Finer Details"
            onClick={() => handleImageClick(details)}
          />
        </div>
        <div className="rsvp-container">
          <img 
            src={rsvp}
            alt="RSVP"
            className="bottom-row"
            onClick={() => handleImageClick(rsvp)}
          />
        </div>
      </main>
      
      {focusedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from propagating
          >
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <img 
              src={focusedImage}
              alt="Focused"
              className="modal-image"
              onClick={() => {
                if (focusedImage === rsvp) {
                  handleRsvpClick();
                }
              }}
            />
            {focusedImage === rsvp && (
              <p className="modal-caption">
                Clicking this image will take you to our wedding website to RSVP.
              </p>
            )}
          </div>
        </div>
      )}
      <p style={{color: 'white'}}>Click images to enlarge</p>
    </div>
  );
}

export default App;
