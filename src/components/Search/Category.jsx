import { Heading, Select, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { UseGlobalState } from '../utils/Context';

const Category = () => {
  const { store, dispatch } = UseGlobalState();
  const { category } = store;

  const changeHandler = e => {
    dispatch({
      type: 'setCategory',
      data: e.target.value,
    });
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <div>
      <Heading>What do you feel like cooking?</Heading>
      <Stack spacing={4}>
        <Select variant="flushed" value={category} onChange={changeHandler}>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Pork">Pork</option>
          <option value="Lamb">Lamb</option>
        </Select>
      </Stack>
    </div>
  );
};

export default Category;
