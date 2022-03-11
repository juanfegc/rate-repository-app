import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    display: 'flex',
    flexGrow: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Hello react-native 🤟</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
