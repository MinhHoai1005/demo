import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContanierComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'

const ForgotPassword = () => {

    const [email, setEmail] = useState<string>('')

    return (
        <ContanierComponent back isImageBackground>
            <SectionComponent>
                <TextComponent text='Reset Password' title />
                <TextComponent text='Please enter your email address to request a password reset' />
                <SpaceComponent height={26} />
                <InputComponent
                    value={email}
                    onChange={(val) => setEmail(val)}
                    affix={<Sms size={20}
                        color={appColor.gray} />}
                    placeholder='abc@email.com'
                />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent
                    type='primary'
                    text='SEND'
                    color={appColor.primary}
                    iconFelx='right' />
            </SectionComponent>
        </ContanierComponent>
    )
}

export default ForgotPassword