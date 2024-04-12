import { View, Image, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appInfo'
import { appColor } from '../../constants/appColors'
import { TextComponent } from '../../components'

const Onboarding = ({ navigation }: any) => {

  const [index, setIndex] = useState<number>(0)

  return (
    <View style={[globalStyles.container]}>
      <Swiper style={{}} loop={false}
        onIndexChanged={(num) => setIndex(num)}
        index={index}
        activeDotColor={appColor.white}>
        <Image source={require('../../assets/images/onboarding_1.jpeg')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover'
          }} />
        <Image source={require('../../assets/images/onboarding_2.png')}
          style={{
            flex: 1, width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover'
          }} />
        <Image source={require('../../assets/images/onboarding_3.png')}
          style={{
            flex: 1, width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'cover'
          }} />
      </Swiper>
      <View style={[{
        paddingHorizontal: 16,
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <TextComponent text='Skip' color={appColor.gray2}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
          <TextComponent text='Next' color={appColor.white}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Onboarding

const styles =StyleSheet.create({
    text:{
      color:appColor.white,
      fontSize:16,
      fontWeight:'500',
    }
})