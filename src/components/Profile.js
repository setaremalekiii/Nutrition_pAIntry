import React, { useState } from 'react';
import backgroundImage from './profile.png'; // Import your background image

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
      padding: '20px', // Add padding for better visibility of content
    }}>
      {/* Cuisines */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Cuisines</h2>
        <form>
          {/* Checkboxes for cuisines */}
          {/* Modify styles as needed */}
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="mexican" onChange={handleCuisineChange} /> Mexican
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="japanese" onChange={handleCuisineChange} /> Japanese
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="persian" onChange={handleCuisineChange} /> Persian
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="italian" onChange={handleCuisineChange} /> Italian
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="chinese" onChange={handleCuisineChange} /> Chinese
          </label>
        </form>
      </div>

      {/* Spice Level */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Spice Level</h2>
        <form>
          {/* Radio buttons for spice level */}
          {/* Modify styles as needed */}
          <label style={{ marginRight: '10px' }}>
            <input type="radio" name="spiceLevel" value="mild" onChange={handleSpiceLevelChange} /> Mild
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="radio" name="spiceLevel" value="medium" onChange={handleSpiceLevelChange} /> Medium
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="radio" name="spiceLevel" value="spicy" onChange={handleSpiceLevelChange} /> Spicy
          </label>
        </form>
      </div>

      {/* Dietary Restrictions */}
      <div>
        <h2>Dietary Restrictions</h2>
        <form>
          {/* Checkboxes for dietary restrictions */}
          {/* Modify styles as needed */}
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="vegetarian" onChange={handleDietaryRestrictionsChange} /> Vegetarian
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="vegan" onChange={handleDietaryRestrictionsChange} /> Vegan
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="halal" onChange={handleDietaryRestrictionsChange} /> Halal
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="gluten-free" onChange={handleDietaryRestrictionsChange} /> Gluten Free
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="checkbox" value="lactose-free" onChange={handleDietaryRestrictionsChange} /> Lactose Free
          </label>
        </form>
      </div>
    </div>
  );
}

export default Profile;
