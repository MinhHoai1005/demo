import { ActivityIndicator, Image, ImageBackground } from 'react-native'
import React from 'react'
import { appInfo } from '../constants/appInfo'
import { SpaceComponent } from '../components'
import { appColor } from '../constants/appColors'

const SplasScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/splash-image.jpeg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{
        flex: 1,
      }}
    >
      <Image source={require('../assets/images/home-logo.jpeg')}
        style={{
          width: appInfo.sizes.WIDTH * 0.8,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={appColor.gray} size={22} />
    </ImageBackground>
  )
}

export default SplasScreen