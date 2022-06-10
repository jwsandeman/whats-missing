import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { UseGlobalState } from '../utils/Context';
import { getRecipes } from '../utils/Services';
import Category from './Category';
import Ingredients from './Ingredients';
import Quantity from './Quantity';
import Tags from './Tags';

const Search = () => {
  const { store, dispatch } = UseGlobalState();
  const { category, quantity, recipes } = store;

  const setRecipes = recipes => {
    dispatch({
      type: 'setRecipes',
      data: recipes,
    });
  };

  const clickHandler = e => {
    e.preventDefault();
    getRecipes(setRecipes, category, quantity);
  };

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <div>
      <h3>Search</h3>
      <Category />
      <Quantity />
      <Ingredients />
      <Tags />
      <Button colorScheme="teal" size="md" onClick={clickHandler}>
        Find Recipes
      </Button>
    </div>
  );
};

export default Search;
