import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './src/redux/store'
import RecipesListScreen from './src/components/Screens/RecipesListScreen'
import RecipesDetailsScreen from './src/components/Screens/RecipesDetailsScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='RecipesList' component={RecipesListScreen}/>
            <Stack.Screen name='RecipeDetails' component={RecipesDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
