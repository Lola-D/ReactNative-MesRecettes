import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSelectedRecipe } from '../../../api/recipes'
import { getSelectedRecipe } from '../../../redux/selectors'

const RecipesDetailsScreen = ({ route }) => {
  const { id } = route.params
  const dispatch = useDispatch()
  
  const recipe = useSelector(getSelectedRecipe)
  
  useEffect(() => {
    fetchSelectedRecipe(dispatch, id)
  }, [])
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{ uri: recipe.image }} resizeMode="cover" style={styles.image}/>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.containerIngredients}>
          {
            recipe.extendedIngredients.map( ing => {
              return <Text style={styles.ing}>{ing.name}</Text>
            })
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  containerImage: {
    height: 200
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 10
  },
  containerIngredients: {
    borderTopWidth: 1,
    borderTopColor: 'lightgreen',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgreen',
    padding: 15
  },
  ing: {
    fontSize: 16
  }
})

export default RecipesDetailsScreen
