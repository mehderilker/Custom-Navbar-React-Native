/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import {NavbarComp} from "../components/navbar/navbarComp";

const App = () => {
  return (
      <NavbarComp>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:20}}>Content</Text>
          </View>
      </NavbarComp>
  );
};

export default App;
