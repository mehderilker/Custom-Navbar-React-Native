import React,{useState,useEffect} from 'react'
import {View,Alert,Dimensions} from 'react-native'
import BarButton from './barButton';
import {images} from "../../img/getImg";
import {isIphoneSafety} from "../../tools/device";

const STATUSBAR_HEIGHT = 56;
const STATUSBAR_PADDING = Platform.OS === 'ios' ? (isIphoneSafety() ? 44 : 20) : 0;

const NavbarComp = (props) => {

    const _onPressButton = () => {
         Alert.alert('You tapped the button!')
    };

    return(
            <View style={{width: '100%', height: '100%', backgroundColor: '#ffffff'}}>
                <View style={{
                    backgroundColor: "green",
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: (STATUSBAR_HEIGHT + STATUSBAR_PADDING),
                    paddingTop: STATUSBAR_PADDING,
                }}>
                        <BarButton source={images.logoIcon}
                                   style={{width: 40, height: 40}} onClick={_onPressButton}/>
                </View>
                {props.children}
            </View>
    )

};

export  {NavbarComp}
