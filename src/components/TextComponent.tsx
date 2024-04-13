import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { appColor } from '../constants/appColors'
import { fontFamilies } from '../constants/fontFamilies'
import { globalStyles } from '../styles/globalStyles'

interface Props {
    text: string,
    color?: string,
    size?: number,
    flex?: number,
    font?: string,
    styles?: StyleProp<TextStyle>,
    title?: boolean,
}

const TextComponent = (props: Props) => {

    const { text, color, size, flex, styles, title } = props

    return (
        <Text style={[
            globalStyles.text,
            {
                color: color ?? appColor.text,
                flex: flex ?? 0,
                fontSize: size ? size : title ? 24 : 14,
                fontFamily: fontFamilies.basic,
            }, styles]
        }
        >{text}
        </Text>
    )
}

export default TextComponent