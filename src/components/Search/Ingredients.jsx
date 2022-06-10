import { Checkbox, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { UseGlobalState } from '../utils/Context';

const Ingredients = () => {
  const { store, dispatch } = UseGlobalState();
  const { ingredients, myIngredients } = store;
  const [input, setInput] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const changeHandler = e => {
    setInput(e.target.value);
    const userFilteredIngredients = ingredients.filter(ingredient => {
      return ingredient.toLowerCase().includes(e.target.value);
    });
    setFilteredIngredients(userFilteredIngredients);
  };

  const checkHandler = e => {
    if (e.target.checked) {
      if (!myIngredients.find(ingredient => ingredient === e.target.value)) {
        dispatch({
          type: 'addIngredient',
          data: e.target.value,
        });
      }
    } else {
      dispatch({
        type: 'removeIngredient',
        data: e.target.value,
      });
    }
  };

  useEffect(() => {
    console.log(input);
    console.log(myIngredients);
  }, [input, myIngredients]);

  return (
    <div>
      <p>
        Filter matching recipes by selecting ingredients below that you already
        have in your fridge/pantry
      </p>
      <Input
        variant="flushed"
        placeholder="Start typing to filter ingredients..."
        value={input}
        onChange={changeHandler}
      />
      {filteredIngredients.map(ingredient => (
        <Checkbox
          key={ingredient}
          onChange={checkHandler}
          value={ingredient}
          colorScheme="green"
          isChecked={myIngredients.includes(ingredient)}
        >
          {ingredient}
        </Checkbox>
      ))}
    </div>
  );
};

export default Ingredients;
