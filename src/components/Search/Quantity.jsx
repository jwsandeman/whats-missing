import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { UseGlobalState } from '../utils/Context';

const Quantity = () => {
  const { store, dispatch } = UseGlobalState();
  const { quantity } = store;

  const changeHandler = value => {
    dispatch({
      type: 'setQuantity',
      data: value,
    });
  };

  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  return (
    <div>
      <p>How many recipes would you like to choose from?</p>
      <NumberInput
        value={quantity}
        min={5}
        max={100}
        onChange={value => changeHandler(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>
  );
};

export default Quantity;
