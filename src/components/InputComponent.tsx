import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { EyeSlash } from 'iconsax-react-native'
import { appColor } from '../constants/appColors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface Props {
  value: string,
  onChange: (val: string) => void,
  affix?: ReactNode,
  placeholder?: string | undefined,
  suffix?: ReactNode,
  isPassword?: boolean,
  allowClear?: boolean,
  type?: KeyboardType,
}

const InputComponent = (props: Props) => {

  const { value, onChange, affix, placeholder, suffix, isPassword, allowClear, type } = props
  const [isShowPassword, setIsShowPassword] = useState<boolean>(isPassword ?? false)


  return (
    <View style={[styles.inputContainer]}>
      {affix && affix}
      <TextInput
        style={[styles.input]}
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPassword}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
      />
      {suffix && suffix}
      <TouchableOpacity onPress={isPassword ? () => setIsShowPassword(!isShowPassword) : () => onChange('')}>
        {isPassword ?
          <FontAwesome
            name={isShowPassword ? 'eye-slash' : 'eye'}
            size={22}
            color={appColor.gray}
          />
          :
          (value.length > 0 && allowClear && <AntDesign name='close' size={22} color={appColor.text} />)}
      </TouchableOpacity>
    </View>
  )
}

export default InputComponent


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColor.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColor.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
    color: appColor.text,
  }
})