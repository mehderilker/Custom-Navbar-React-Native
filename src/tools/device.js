import { Dimensions, Platform } from 'react-native';

export function isIphoneSafety() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        (isIPhoneXSizeType(dim) || isIPhoneXrSizeType(dim))
    );
}

export function isIPhoneXSizeType(dim) {
    return dim.height == 812 || dim.width == 812;
}

export function isIPhoneXrSizeType(dim) {
    return dim.height == 896 || dim.width == 896;
}
