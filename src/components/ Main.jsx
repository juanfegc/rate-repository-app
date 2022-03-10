import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text>Hello react-native 🤟</Text>
      <RepositoryList />
    </View>
  )
}

export default Main
