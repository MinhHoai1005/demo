
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
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    shawdow: {
        shadowColor: 'rgba(0,0,0,5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    }
}