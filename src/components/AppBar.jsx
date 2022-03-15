import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: Constants.statusBarHeight / 3,
    backgroundColor: theme.colors.backgroundAppBar,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>Repositories</Text>
    </View>
  )
}

export default AppBar
