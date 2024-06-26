import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={async () => await AsyncStorage.clear()}></Button>
    </View>
  )
}

export default HomeScreen