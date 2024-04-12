import { View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import { InputComponent } from '../../components'
import { Sms,Lock } from 'iconsax-react-native'
import { appColor } from '../../constants/appColors'

const LoginScreen = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
      <InputComponent
        value={email}
        placeholder='Email'
        onChange={(val) => setEmail(val)}
        // isPassword
        allowClear
        affix={<Sms size={22} color={appColor.gray} />}
      />
      <InputComponent
        value={password}
        placeholder='Password'
        onChange={(val) => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColor.gray} />}
      />
    </View>
  )
}

export default LoginScreen