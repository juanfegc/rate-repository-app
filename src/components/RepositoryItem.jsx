import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, StyleSheet, View } from 'react-native'

const RepositoryItem = ({ item }) => (
  <View>
    <Text>{item.fullName}</Text>
  </View>
)

export default RepositoryItem
