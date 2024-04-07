
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from './first.png'; // Import your background image

function Hotdog() {
  return (
    <div style={{
      backgroundImage: `url('${backgroundImage}')`, // Correct interpolation of the background image URL
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport
    }}>
      <Link to="https://cleanfoodcrush.com/zucchini-hot-dog-boats-clean-eating/" target="_blank" rel="noopener noreferrer">
        <button 
          style={{ 
            padding: '10px 110px', // Adjust padding to make it shorter
            fontSize: '16px', 
            backgroundColor: 'transparent', // Orange color for better visibility
            color: 'transparent', // White text color
            border: 'none', 
            borderRadius: '10px', 
            cursor: 'pointer',
            position: 'absolute',
            bottom: '100px',
            left: '45%', // Move the button slightly to the left
            transform: 'translateX(-50%)', // Center the button horizontally
          }}
        >
        </button>
      </Link>
    </div>
  );
}

export default Hotdog;
