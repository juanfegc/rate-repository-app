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
    flexDirection: 'column',
  },
  containerHeader: {
    flexDirection: 'row',
  },
  avatarContainer: {
    flexGrow: 0,
    padding: 20,
    paddingTop: 4,
  },
  infoContainer: {
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 8,
  },
  boton: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'stretch',
  },
  containerFooter: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  containerFooterItem: { flexDirection: 'column' },
  containerFooterNumber: { fontWeight: 'bold' },
})

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.containerHeader}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.boton}>{item.language}</Text>
      </View>
    </View>

    <View style={styles.containerFooter}>
      <View style={styles.containerFooterItem}>
        <Text style={styles.containerFooterNumber}>{item.stargazersCount}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.containerFooterItem}>
        <Text style={styles.containerFooterNumber}>{item.forksCount}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.containerFooterItem}>
        <Text style={styles.containerFooterNumber}>{item.reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.containerFooterItem}>
        <Text style={styles.containerFooterNumber}>{item.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  </View>
)

export default RepositoryItem
