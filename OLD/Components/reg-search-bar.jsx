import { Text, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

const RegSearchBar = ({searchType}) => {

  const [inputText, setInputText] = useState('')
  const [previousSearches, setPreviousSearches] = useState([])

  // Will be used to grab 3 recent searches from the db
  // id could be the id from the mongodb
  // or could use index in map(el, index) => etc
  useEffect(() => {
    setPreviousSearches([{
      reg: 'DY69 XTP',
      id: 0
    },
    {
      reg: 'DG70 PXT',
      id: 1
    }]);
  }, [])

  return (
    <View>
      <Text>{searchType}</Text>
      <TextInput
        value={inputText}
        placeholder='Enter a registration number...'
        onChangeText={(text) => {
          setInputText(text)
        }}
      />
      <Text>Your reg:</Text>
      <Text>{inputText}</Text>

      <Text>Previous searches:</Text>
      {previousSearches.map((element) => (
        <Text key={element.id}>{element.reg}</Text>
        ))}
    </View>
  )
}

export default RegSearchBar



