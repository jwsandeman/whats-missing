import React, { useEffect, useReducer, useState } from 'react';
import {
  extendTheme,
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import Nav from './Nav/Nav';
import Search from './Search/Search';
import Recipes from './Recipes/Recipes';
import ShoppingList from './ShoppingList/ShoppingList';
import { getRecipes } from './utils/Services';
import { reducer } from './utils/reducer';
import { Context } from './utils/Context';

const colors = {
  brand: {
    900: '#FDF500',
    800: '#2CF6B3',
    700: '#9370DB',
    // 600: '#37EBF3',
  },
};

const theme = extendTheme({ colors });

function App() {
  const initialState = {
    category: 'Chicken',
    quantity: 15,
    ingredients: [
      '1/4 cup milk',
      '3 eggs',
      '500g chicken',
      '1kg beef mince',
      'clove of garlic',
      '1tbsp olive oil',
    ],
    myIngredients: [],
    tags: [],
    recipes: [],
    myRecipes: [],
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const {
    category,
    quantity,
    ingredients,
    myIngredients,
    tags,
    recipes,
    myRecipes,
  } = store;

  // const [category, setCategory] = useState('chicken');
  // const [quantity, setQuantity] = useState(15);
  // const [ingredients, setIngredients] = useState([]);
  // const [myIngredients, setMyIngredients] = useState([]);
  // const [tags, setTags] = useState([]);
  // const [missingIngredients, setMissingIngredients] = useState([]);
  // const [recipes, setRecipes] = useState([]);
  // const [myRecipes, setmyRecipes] = useState([]);

  // const findRecipes = newRecipes => {
  //   setRecipes(newRecipes);
  // };

  // useEffect(() => {
  //   getRecipes(setRecipes);
  //   console.log(recipes);
  // }, []);

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ store, dispatch }}>
        <Box textAlign="center" fontSize="xl" bg="pink.100">
          <Grid minH="100vh" p={3}>
            <Nav />
            <VStack spacing={8}>
              <Tabs variant="soft-rounded" colorScheme="green" bg="blue.100">
                <TabList>
                  <Tab>Select Recipes</Tab>
                  <Tab>My Recipes</Tab>
                  <Tab isDisabled>Shopping List</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Search />
                    {recipes && <Recipes recipes={recipes} />}
                  </TabPanel>
                  <TabPanel>
                    <Recipes />
                  </TabPanel>
                  <TabPanel>
                    <ShoppingList />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </VStack>
          </Grid>
        </Box>
      </Context.Provider>
    </ChakraProvider>
  );
}

export default App;
