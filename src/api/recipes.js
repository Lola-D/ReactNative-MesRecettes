import axios from 'axios'

import { fetchRecipesAction, fetchSelectedRecipeAction } from '../redux/actions'

const END_POINT_BASE = 'https://api.spoonacular.com/recipes'
const apiKey = '9433fbb7ca884d38949765cd45cce79a'
const MAX_PER_PAGE = 30

export const fetchRecipes = async (dispatch) => {
  try {
    const response = await axios.get(`${END_POINT_BASE}/complexSearch`, {
      params: {
        apiKey,
        number: MAX_PER_PAGE
      }
    })
    dispatch(fetchRecipesAction(response.data.results))
  } catch(err) {
    console.log('error ', err)
  }
}


export const fetchSelectedRecipe = async (dispatch, recipeId) => {
  try {
    const response = await axios.get(`${END_POINT_BASE}/${recipeId}/information`, {
      params: {
        apiKey
      }
    })
    dispatch(fetchSelectedRecipeAction(response.data))
  } catch(err) {
    console.log('error ', err)
  }
}
