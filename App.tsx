import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplasScreen from './src/screens/SplashScreen'
import AuthNavigator from './src/navigators/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => {


    }, 1500)

    return clearTimeout(timeout)
  }, [])
  return (
    isShowSplash ? <SplasScreen /> :
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
  )
}

export default App