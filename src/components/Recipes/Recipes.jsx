import React, { useEffect } from 'react';
import { UseGlobalState } from '../utils/Context';
import DisplayRecipe from './DisplayRecipe';
import RecipeCard from './RecipeCard';

const Recipes = () => {
  const { store } = UseGlobalState();
  const { recipes } = store;

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

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
