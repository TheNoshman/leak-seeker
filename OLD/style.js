import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'red',
  },

  startBox: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 250,
    width: 250,
    borderWidth: 1,
    borderColor: 'red',
  },

  buttonBox: {
    borderWidth: 1,
    borderColor: 'orange',
    flexDirection: 'row'
  },

  logo: {
    width: 80,
    height: 80,
  },

  logoBox: {
    borderWidth: 1,
    borderColor: 'orange',
  }

});


const touchableStyles = StyleSheet.create({
  startBoxes: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#fcc40e',
  }
})

module.exports = { appStyles, touchableStyles }


// COLOUR GRADIENTS ORANGE -> RED
// #fcc40e
// #e9453a