import { combineReducers } from 'redux'

import { recipesList } from './recipesList'
import { selectedRecipe  } from './selectedRecipe'

export default combineReducers({
  recipesList,
  selectedRecipe
})
