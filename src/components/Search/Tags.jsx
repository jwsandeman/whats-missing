import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { UseGlobalState } from '../utils/Context';

const Tags = () => {
  const { store } = UseGlobalState();
  const { myIngredients } = store;

  return (
    <div>
      {myIngredients && (
        <>
          <p>My Ingredients</p>
          {myIngredients.map(ingredient => {
            return (
              <Tag
                size="md"
                key={ingredient}
                variant="outline"
                colorScheme="blue"
              >
                <TagLabel>{ingredient}</TagLabel>
              </Tag>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Tags;
