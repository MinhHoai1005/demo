import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import SplasScreen from './src/screens/SplashScreen'
import AuthNavigator from './src/navigators/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-community/async-storage'
import MainNavigator from './src/navigators/MainNavigator'

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string>('');
  const { getItem, setItem } = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500)

    return ()=>clearTimeout(timeout)
  }, [])

  const checkLogin = async () => {
    const token = await getItem();
    token && setAccessToken(token);
  }
  useEffect(() => {
    checkLogin()
  }, [])
  return <>
    <StatusBar barStyle='dark-content' translucent backgroundColor='transparent' />
    {
      isShowSplash ? <SplasScreen /> :
        <NavigationContainer>
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    }
  </>
}

export default App