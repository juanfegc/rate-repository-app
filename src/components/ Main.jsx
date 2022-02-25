import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Hello react-native 🤟</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Main
