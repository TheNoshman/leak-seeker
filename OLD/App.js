import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {appStyles} from './style';
import ButtonContainer from './Containers/button-container';

const logo = require('./Images/logo.png');

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={appStyles.mainPage}>
      <View style={appStyles.logoBox}>
        <Image
        style={appStyles.logo}
        source={logo}
        />
      </View>
        <View style={appStyles.startBox}>
          <Text>Welcome</Text>
          <Text>Please choose an option:</Text>
          <View style={appStyles.buttonBox}>
            <ButtonContainer />
          </View>
          <StatusBar style="auto" />
        </View>
    </View>
  );
}
