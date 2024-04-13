import React, { useState } from 'react'
import { ButtonComponent, ContanierComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent, } from '../../components'
import { Sms, Lock } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'
import { Image } from 'react-native'
import { fontFamilies } from '../../constants/fontFamilies'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  isRemember: false,
}

const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }
    data[`${key}`] = value
    setValues(data)
  }
  return (
    <ContanierComponent isImageBackground isScroll title='' back>
      <SectionComponent styles={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/text-logo.jpeg')}
          style={{
            width: 162,
            height: 114,
            marginTop: 75,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent font={fontFamilies.blod} size={24} text='Sign up'></TextComponent>
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          placeholder='Full name'
          onChange={(val) => handleChangeValue('username', val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={values.email}
          placeholder='Email'
          onChange={(val) => handleChangeValue('email', val)}
          allowClear
          affix={<Sms size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={values.password}
          placeholder='Password'
          onChange={(val) => handleChangeValue('password', val)}
          isPassword
          affix={<Lock size={22} color={appColor.gray} />}
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder='Confirm Password'
          onChange={(val) => handleChangeValue('confirmPassword', val)}
          isPassword
          affix={<Lock size={22} color={appColor.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent >
        <ButtonComponent text='SING up' type='primary' color={appColor.primary} />
      </SectionComponent>
      {/* <SocialLogin /> */}
      <SectionComponent >
        <RowComponent justify='center'>
          <ButtonComponent text='Don’t have an account?' type='text' />
          <ButtonComponent text='Sign in' type='link' onPress={() => navigation.navigate('LoginScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContanierComponent>
  )
}

export default SignUpScreen