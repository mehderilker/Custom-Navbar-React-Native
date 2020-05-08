import React from 'react';
import {Image ,TouchableOpacity} from 'react-native'

const ImageButton = (props) => {
    return(
        <TouchableOpacity onPress={props.onPressButton} style={props.style}>
            <Image source = {props.source} style = {props.imageStyle}/>
        </TouchableOpacity>
    )
};

export default ImageButton
