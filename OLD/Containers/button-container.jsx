import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MyButton from '../Components/button-component';
import RegSearchBar from '../Components/reg-search-bar';

const ButtonContainer = () => {

  const [searchForFaults, setSearchForFaults] = useState(false)
  const [logNewFault, setLogNewFault] = useState(false)

  return (
    <View>
     <MyButton
        parentState = {searchForFaults}
        setParentState = {setSearchForFaults}
        otherSetState = {setLogNewFault}
        otherButtonState = {logNewFault}
        btnClass="fault-search-btn"
        title="Search for faults" />

      {searchForFaults &&
        <RegSearchBar searchType='search fault'/>
      }

      <MyButton
        parentState = {logNewFault}
        setParentState = {setLogNewFault}
        otherSetState = {setSearchForFaults}
        otherButtonState = {searchForFaults}
        btnClass="log-new-fault-btn"
        title="Log new fault" />

      {logNewFault &&
        <RegSearchBar searchType='new fault'/>
      }
     </View>
  )
}

export default ButtonContainer