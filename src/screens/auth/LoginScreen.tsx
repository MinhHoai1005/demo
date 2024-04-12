import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'aaaaa')}></Button>
    </View>
  )
}

export default LoginScreen