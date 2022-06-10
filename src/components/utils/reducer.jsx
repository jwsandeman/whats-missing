export const reducer = (state, action) => {
  switch (action.type) {
    case 'addIngredient': {
      return {
        ...state,
        myIngredients: [action.data, ...state.myIngredients],
      };
    }
    case 'removeIngredient': {
      return {
        ...state,
        //   myIngredients: [action.data, ...state.myIngredients],
        myIngredients: state.myIngredients.filter(
          ingredient => ingredient !== action.data
        ),
      };
    }
    case 'setRecipes': {
      return {
        ...state,
        recipes: [action.data, ...state.recipes],
      };
    }
    case 'setMyRecipes': {
      return {
        ...state,
        myRecipes: [action.data, ...state.myRecipes],
      };
    }
    case 'setCategory': {
      return {
        ...state,
        category: action.data,
      };
    }
    case 'setQuantity': {
      return {
        ...state,
        quantity: action.data,
      };
    }
    default:
      return state;
  }
};
