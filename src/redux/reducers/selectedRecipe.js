import { SELECTED_RECIPE } from '../actionsType'

export const selectedRecipe = (state = [], action) => {
  switch(action.type) {
    case SELECTED_RECIPE:
      return action.payload.data
    default:
      return state
  }
}
