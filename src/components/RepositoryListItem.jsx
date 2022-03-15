import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View, Image } from 'react-native'
import theme from '../theme'

const millar = num => {
  return num + 'k'
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  boton: {
    backgroundColor: theme.colors.primary,
  },
})
const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
    <Text>Fullname: {item.fullName}</Text>
    <Text>Description: {item.description}</Text>
    <Text style={styles.boton}>Language: {item.language}</Text>
    <Text>Stars: {item.stargazersCount}</Text>
    <Text>Forks: {item.forksCount}</Text>
    <Text>Reviews: {item.reviewCount}</Text>
    <Text>Rating: {item.ratingAverage}</Text>
  </View>
)

export default RepositoryItem
