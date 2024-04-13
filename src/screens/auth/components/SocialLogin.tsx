import { Google } from 'iconsax-react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColor } from '../../../constants/appColors'

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{ textAlign: 'center' }}
        text='OR'
        color={appColor.gray4} size={16}
      />
      <SpaceComponent height={16}/>
      <ButtonComponent
        type='primary'
        color={appColor.white}
        textColor={appColor.text}
        text='Google'
        icon={<Google  />}
        iconFelx='left'
      />
    </SectionComponent>
  )
}

export default SocialLogin