import React, { useState } from 'react';
import backgroundImage from './profile.png'; // Import your background image
import { Link } from 'react-router-dom';
function Profile() {
  // State variables to track selected options
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState('');
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);

  // Handler functions to update selected options
  const handleCuisineChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCuisines([...selectedCuisines, value]);
    } else {
      setSelectedCuisines(selectedCuisines.filter((cuisine) => cuisine !== value));
    }
  };

  const handleSpiceLevelChange = (e) => {
    setSelectedSpiceLevel(e.target.value);
  };

  const handleDietaryRestrictionsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDietaryRestrictions([...selectedDietaryRestrictions, value]);
    } else {
      setSelectedDietaryRestrictions(selectedDietaryRestrictions.filter((restriction) => restriction !== value));
    }
  };

  return (
    <div style={{
      backgroundImage: `url('${backgroundImage}')`, // Correct interpolation of the background image URL
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the background covers the entire viewport
      padding: '150px', // Add padding for better visibility of content
    }}>
       {/* Cuisines */}
       <div style={{   marginTop: '10px', marginLeft: '750px',// Adjust this value to increase spacing from the top
  marginBottom: '420px'}}>
        <form>
          {/* Checkboxes for cuisines */}
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="mexican" onChange={handleCuisineChange} /> Mexican
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white' }}>
            <input type="checkbox" value="persian" onChange={handleCuisineChange} /> Persian
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Italian" onChange={handleCuisineChange} /> Italian
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Indian" onChange={handleCuisineChange} /> Indian
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="japanese" onChange={handleCuisineChange} /> Japanese
          </label>
          {/* ... other labels */}
        </form>
      </div>

      {/* Spice Level */}
      <div style={{  marginTop: '100px', marginLeft: '750px',// Adjust this value to increase spacing from the top
  marginBottom: '320px' }}>
        <form>
          {/* Radio buttons for spice level */}
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Mild Spicy" onChange={handleCuisineChange} /> Mild Spicy
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white' }}>
            <input type="checkbox" value="Spicy" onChange={handleCuisineChange} /> Spicy
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Sweet" onChange={handleCuisineChange} /> Sweet
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Tangy" onChange={handleCuisineChange} /> Tangy
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Simple" onChange={handleCuisineChange} /> Simple
          </label>
          {/* ... other labels */}
        </form>
      </div>

      {/* Dietary Restrictions */}
      <div style={{  marginTop: '400px', marginLeft: '720px'// Adjust this value to increase spacing from the top
  }}>        <form>
          {/* Checkboxes for dietary restrictions */}
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Vegetarian" onChange={handleCuisineChange} /> Vegetarian
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white' }}>
            <input type="checkbox" value="Vegan" onChange={handleCuisineChange} /> Vegan
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Halal" onChange={handleCuisineChange} /> Halal
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Gluten Free" onChange={handleCuisineChange} /> Gluten Free
          </label>
          <label style={{ marginRight: '40px', fontSize: '30px', color: 'white'  }}>
            <input type="checkbox" value="Nut-Allergies" onChange={handleCuisineChange} /> Allergies
          </label>          {/* ... other labels */}
        </form>
      </div>
      <Link to="/">
  <button 
    style={{ 
      padding: '25px 150px', // Adjust padding to make it shorter
      fontSize: '16px', 
      backgroundColor: 'grey', // Set background color to transparent
      color: 'White', // Set text color to transparent
      fontSize: '30px',
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer',
      position: 'absolute',
      bottom: '-400px',
      left: '50%', // Center the button horizontally
      transform: 'translateX(-50%)', // Center the button horizontally
    }}
  >
  Submit!</button>
</Link>
    </div>
  );
}
export default Profile;
