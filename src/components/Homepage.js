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
  backgroundSize: '90%', // Scales the image as large as possible without cropping or stretching the image
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center', // Centers the image within the container
  width: '100vw', // Full viewport width
  height: '100vh', // Full viewport height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  position: 'relative', // Ensures that absolute positioning is relative to this container
}}>
      {/* Centered GIF */}
      <img src={gifImage} alt="GIF" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px' }} />

      {/* End of centered GIF */}
<Link to="/detect">
  <button 
    style={{ 
      padding: '10px 100px', // Adjust padding to make it shorter
      fontSize: '16px', 
      backgroundColor: 'transparent', // Set background color to transparent
      color: 'transparent', // Set text color to transparent
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      position: 'absolute',
      bottom: '50px',
      left: '50%', // Center the button horizontally
      transform: 'translateX(-50%)', // Center the button horizontally
    }}
  >
  </button>
</Link>

<Link to="/profile">
  <button 
    style={{ 
      padding: '50px 60px', // Adjust padding as needed
      fontSize: '16px',
      backgroundColor: 'transparent', // Button background color
      color: 'transparent', // Button text color
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      position: 'absolute',
      bottom: '800px', // Increase to move the button up
      left: 'calc(50% + 550px)', // Add to the 50% to move the button to the right
      // Remove the transform property if you are not centering
    }}
  >
  </button>
</Link>

    </div>
    
  );
}

export default Homepage;

//<Link to="/detect"><button>Go to Detection</button></Link>
