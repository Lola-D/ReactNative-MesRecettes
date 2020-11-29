import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const RecipesListItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('RecipeDetails', {
        id: item.id
      })
    }}>
      <View  style={styles.container}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  image: {
    height: 100,
    width: 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 10
  }
})

export default RecipesListItem
