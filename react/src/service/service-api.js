
const onSearchSubmit = async (inputText, event) => {
    event.preventDefault();

    if (!inputText) {
      alert('Please enter a valid registration number');
      return;
    } else {
      console.log('SEARCH -> NEXT STEP + INPUT IS = ', inputText);
      // setIntroPage(false)

      // SEND DATA THROUGH TO BACKEND
      // GET RID OF WELCOME PAGE
      // RENDER MAIN PAGE
    }
  };

module.exports = {onSearchSubmit}