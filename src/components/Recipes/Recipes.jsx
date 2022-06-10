import React from 'react';
import DisplayRecipe from './DisplayRecipe';
import RecipeCard from './RecipeCard';

const Recipes = ({ recipes }) => {
  return (
    <div>
      <h3>Recipes</h3>
      {recipes &&
        recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      <DisplayRecipe />
    </div>
  );
};

export default Recipes;
