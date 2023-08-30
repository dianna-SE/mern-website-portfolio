import React, { useState } from 'react';

function IngredientInput() {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const renderIngredients = () => {
    return ingredients.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < ingredients.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div>
      <textarea
        value={ingredients}
        onChange={handleInputChange}
        placeholder="Enter ingredients, each on a new line"
        rows="4"
        cols="50"
      ></textarea>
      <div>
        <h3>Ingredients:</h3>
        {renderIngredients()}
      </div>
    </div>
  );
}

export default IngredientInput;
