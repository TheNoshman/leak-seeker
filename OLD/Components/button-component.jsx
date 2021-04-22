import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { logPress } from '../Services/service-api'
import {touchableStyles} from '../style';


const MyButton = ({otherButtonState, otherSetState, parentState, setParentState, btnClass, title}) => {
  return (
    <TouchableOpacity
      className={btnClass}

      onPress={() => {
        // Toggles the search bar input to show or not
        setParentState(!parentState)
        if (otherButtonState) {
          otherSetState(!otherButtonState)
        }
        logPress(title)
      }}>
      <Text style={touchableStyles.startBoxes}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton