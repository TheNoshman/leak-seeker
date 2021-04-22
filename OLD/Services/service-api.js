const localURL = 'http://localhost:3000/';

const getPreviousRegSearches = async (pathUrl) => {
  try {
    const response = await fetch(`${localURL}${pathUrl}`)
  } catch (error) {
    console.log(error)
  }
}

// Button onPress handler
const logPress = (buttonName) => console.log(`Pressed ${buttonName}`)

module.exports = {logPress}