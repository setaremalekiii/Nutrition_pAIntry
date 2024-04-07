//import { Link } from 'react-router-dom';

//function Homepage() {
  //return (
    //<div>
      //<h1>Welcome to the Homepage</h1>
      //<Link to="/detect"><button>Go to Detection</button></Link>
    //</div>
  //);
//}

//export default Homepage;

import React from 'react';
import { Link } from 'react-router-dom';
import gifImage from './fridge.gif'; // Import your GIF image
import backgroundImage from './homepage.png'; // Import your background image
//import '.\home'

function Homepage() {
  console.log('gifImage:', gifImage);
  console.log('backgroundImage:', backgroundImage);

  return (
<div style={{ 
  backgroundImage: `url(${backgroundImage})`, 
  backgroundSize: 'cover', // Zoom out the background image slightly
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensure the background covers the entire viewport
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  position: 'relative', // Ensure that absolute positioning works relative to this container
}}>
      {/* Centered GIF */}
      <img src={gifImage} alt="GIF" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px' }} />

      {/* End of centered GIF */}
<Link to="/detect">
  <button 
    style={{ 
      padding: '10px 60px', // Adjust padding to make it shorter
      fontSize: '16px', 
      backgroundColor: 'transparent', // Set background color to transparent
      color: 'transparent', // Set text color to transparent
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      position: 'absolute',
      bottom: '20px',
      left: '50%', // Center the button horizontally
      transform: 'translateX(-50%)', // Center the button horizontally
    }}
  >
  </button>
</Link>
//<Link to="/detect"><button>Go to Detection</button></Link>
    </div>
  );
}

export default Homepage;
