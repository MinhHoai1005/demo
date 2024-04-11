import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplasScreen from './src/screens/SplashScreen'
import AuthNavigator from './src/navigators/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500)

    return clearTimeout(timeout)
  }, [])
  return <>
    <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
    {
      isShowSplash ? <SplasScreen /> :
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
    }
  </>
}

export default App