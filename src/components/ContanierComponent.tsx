import { View, ImageBackground, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles'
import { useNavigation } from '@react-navigation/native'
import RowComponent from './RowComponent'
import { ArrowLeft } from 'iconsax-react-native'
import { appColor } from '../constants/appColors'
import TextComponent from './TextComponent'
import { fontFamilies } from '../constants/fontFamilies'


interface Props {
    isImageBackground?: boolean,
    isScroll?: boolean,
    title?: string,
    children: ReactNode,
    back?: boolean,
}

const ContanierComponent = (props: Props) => {

    const { isImageBackground, isScroll, title, children, back } = props

    const navigation: any = useNavigation()

    const hederComponent = () => {
        return (<View style={{ flex: 1, paddingBottom: 30 }}>
            {(title || back) && (
                <RowComponent
                    styles={{
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        minWidth: 48,
                        minHeight: 48,
                    }}>
                    {back &&
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ marginRight: 12 }}
                        >
                            <ArrowLeft size={24}
                                color={appColor.text} />
                        </TouchableOpacity>
                    }
                    {title ? (<TextComponent text={title} size={16} font={fontFamilies.basic} />) : (<></>)}
                </RowComponent>
            )}

            {returnContainer}
        </View>
        );
    }

    const returnContainer = isScroll ?
        <ScrollView style={{ flex: 1 }}>{children}</ScrollView> :
        <View style={{ flex: 1 }}>{children}</View>

    return (
        isImageBackground ? (
            <ImageBackground
                source={require('../assets/images/splash-image.jpeg')}
                style={{ flex: 1 }}
                imageStyle={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    {hederComponent()}
                </SafeAreaView>
            </ImageBackground>)
            : (<SafeAreaView style={[globalStyles.container]}>
                <View>
                    {hederComponent()}
                </View>
            </SafeAreaView>

            )
    );

}

export default ContanierComponent