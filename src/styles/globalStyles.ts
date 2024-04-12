
import { fontFamilies } from '../constants/fontFamilies';
import { appColor } from './../constants/appColors';
export const globalStyles ={
    container:{
        flex:1,
        backgroundColor: appColor.white,
    },
    text:{
        fontFamily:fontFamilies.basic,
        fontSize:14,
        color:appColor.text,
    }
}