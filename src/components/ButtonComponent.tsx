import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    onPress?: () => void,
    iconFelx?: 'right' | 'left',
}
const ButtonComponent = (props: Props) => {

    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFelx } = props

    return (
        <TouchableOpacity>
            {icon && iconFelx === 'left' && icon}
            <TextComponent text={text} color={textColor} styles={textStyles} />
            {icon && iconFelx === 'right' && icon}
        </TouchableOpacity>
    )
}

export default ButtonComponent