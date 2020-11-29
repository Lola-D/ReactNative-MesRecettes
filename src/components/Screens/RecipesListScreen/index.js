import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRecipes } from '../../../api/recipes'
import { getRecipes } from '../../../redux/selectors'
import RecipesListItem from './RecipesListItem'

const RecipesListScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  
  const recipes = useSelector(getRecipes)
  
  useEffect(() => {
    fetchRecipes(dispatch)
  }, [])
  
  const renderItem = ({item}) => {
    return <RecipesListItem item={item} navigation={navigation}/>
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgreen'
  }
})

export default RecipesListScreen
