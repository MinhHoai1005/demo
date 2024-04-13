import { StyleProp, ViewStyle, TextStyle, TouchableOpacity ,View} from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { appColor } from '../constants/appColors'
import { fontFamilies } from '../constants/fontFamilies'

interface Props {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    textFont?: string,
    onPress?: () => void,
    iconFelx?: 'right' | 'left',
}
const ButtonComponent = (props: Props) => {

    const { icon, text, type, color, styles, textColor, textStyles, textFont, onPress, iconFelx } = props

    return (
        type === 'primary' ? (
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={onPress}
                    style={
                        [
                            globalStyles.button,
                            globalStyles.shawdow,
                            { backgroundColor: color && appColor.primary, width: '85%' },
                            styles
                        ]} >
                    {icon && iconFelx==='left'&&icon}
                    <TextComponent
                        text={text}
                        color={textColor ?? appColor.white}
                        font={textFont ?? fontFamilies.blod}
                        styles={[
                            textStyles, {
                                marginLeft: icon ? 12 : 0,
                                fontSize: 16,
                                textAlign: 'center',
                            },

                        ]
                        }
                        
                        flex={icon && iconFelx === 'right' ? 1 : 0}
                    />
                    {icon && iconFelx === 'right' && icon}

                </TouchableOpacity>
            </View>

        )
            : (
                <TouchableOpacity onPress={onPress}>
                    <TextComponent

                        text={text}
                        color={type === 'link' ? appColor.link : appColor.text}
                    />
                </TouchableOpacity>
            )
    )
}

export default ButtonComponent