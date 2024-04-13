import React, { useState } from 'react'
import { ButtonComponent, ContanierComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent, } from '../../components'
import { Sms, Lock } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'
import { Image, Switch } from 'react-native'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'
import authenticationAPI from '../../api/authApi'

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isRemember, setIsRemember] = useState<boolean>(false)

  const handleLogin = async () => {

    try {
      const res = await authenticationAPI.HandleAuthentication('hello')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContanierComponent isImageBackground isScroll>
      <SectionComponent styles={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/text-logo.jpeg')}
          style={{
            width: 162,
            height: 114,
            marginTop: 75,
            // marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent font={fontFamilies.blod} size={24} text='Sign in'></TextComponent>
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder='Email'
          onChange={(val) => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={password}
          placeholder='Password'
          onChange={(val) => setPassword(val)}
          isPassword
          affix={<Lock size={22} color={appColor.gray} />}
        />
        <RowComponent justify='space-between' onPress={() => setIsRemember(!isRemember)}>
          <RowComponent>
            <Switch
              trackColor={{ true: appColor.primary }}
              thumbColor={appColor.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text='Remember me' />
          </RowComponent>
          <ButtonComponent
            text='Forgot Password?'
            onPress={() => navigation.navigate('ForgotPassword')}
            type='link'
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent >
        <ButtonComponent onPress={handleLogin} text='SING IN' type='primary' color={appColor.primary} />
      </SectionComponent>
      {/* <SocialLogin /> */}
      <SectionComponent >
        <RowComponent justify='center'>
          <ButtonComponent text='Don’t have an account?' type='text' />
          <ButtonComponent text='Sign up' type='link' onPress={() => navigation.navigate('SignUpScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContanierComponent>
  )
}

export default LoginScreen