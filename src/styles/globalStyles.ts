
import { fontFamilies } from '../constants/fontFamilies';
import { appColor } from './../constants/appColors';
export const globalStyles = {
    container: {
        flex: 1,
        backgroundColor: appColor.white,
    },
    text: {
        fontFamily: fontFamilies.basic,
        fontSize: 14,
        color: appColor.text,
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColor.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        minHeight: 56,
        flexDirection: 'row',
    }
}