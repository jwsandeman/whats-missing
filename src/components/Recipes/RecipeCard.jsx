import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h4>{recipe.title}</h4>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
