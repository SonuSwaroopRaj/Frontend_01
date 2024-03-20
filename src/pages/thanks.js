import React from "react";
import { useState } from "react";
// import Thanks from "./thanks"
function Thanks() {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Your form submission logic here
      // For demonstration purposes, let's just show the popup
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          {/* Your form fields here */}
          <button type="submit">Submit</button>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <p>Thank you for submitting!</p>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Thanks;