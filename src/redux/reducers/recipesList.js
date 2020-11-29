import { ADD_RECIPES } from '../actionsType'

export const recipesList = (state = [], action) => {
  switch(action.type) {
    case ADD_RECIPES:
      return action.payload.data
    default:
      return state
  }
}
