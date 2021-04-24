import { useState } from 'react';
import '../css/welcomepage.css';

const WelcomeChoiceButton = ({searchType, setIntroPage, setSearchedReg} ) => {

  // THESE STATES TRACK WHICH DROP DOWN TO SHOW
  const [searchClicked, setSearchClicked] = useState(false);
  const [logClicked, setLogClicked] = useState(false);
  const [inputText, setInputText] = useState({
    reg: '',
    make: '',
    model: ''
  });

  // SETS STATE TO APPROPRIATE INPUTTED VALUES
  const inputHandler = (event) => setInputText({...inputText, [event.target.name]: event.target.value,})

  const onSearchSubmit = async (event) => {
    event.preventDefault();

    if (!inputText.reg) {
      alert('Please enter a valid registration number');
      return;

    } else {
      console.log('SEARCH -> NEXT STEP', inputText.reg)
      setSearchedReg(inputText.reg)
      setIntroPage(false)

      // SEND DATA THROUGH TO BACKEND
      // GET RID OF WELCOME PAGE
      // RENDER MAIN PAGE

    }
  };






    const onLogSubmit = async (event) => {
    event.preventDefault();

    if (!inputText.reg || !inputText.make || !inputText.model) {
      alert('Please enter your vehicle details');
      return;

    } else {
      console.log('LOG -> NEXT STEP')
      setIntroPage(false)
      // SEND DATA THROUGH TO FAULT REGISTER PAGE
      // REMOVE WELCOME PAGE
      // RENDER FAULT REGISTER PAGE
    }
  };







  return (
    // HANDLES WHICH DROP DOWN TO RENDER
    <div className='button-div'>
      <button
        type="button"
        onClick={() => {
          searchType === 'Search Faults'
            ? setSearchClicked(!searchClicked)
            : setLogClicked(!logClicked);
        }}
      >
        {searchType}
      </button>

      {/*IF SEARCH FAULTS BUTTON IS CLICKED*/}
      {searchClicked && (
        <div className='input-box-div'>
          <form className='input-box-form' onSubmit={onSearchSubmit}>
            <label>
              <input
                type="text"
                name='reg'
                value={inputText.reg}
                placeholder="Enter a registration number..."
                onChange={(event) => inputHandler(event)}
              />
            </label>

          <p>Your reg:</p>
          <p className='input-output'>{inputText.reg}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}

      {/*IF REGISTER FAULT BUTTON IS CLICKED*/}
      {logClicked && (
        <div>
          <form className='input-box-form' onSubmit={onLogSubmit}>
            <label>Registration
              <input
                type="text"
                name='reg'
                value={inputText.reg}
                placeholder="Enter your registration number..."
                onChange={(event) => inputHandler(event)}
              />
            </label>



          <label>Make/ Brand
              <input
                type="text"
                name='make'
                value={inputText.make}
                placeholder="Enter your vehicles manufacturer..."
                onChange={(event) => inputHandler(event)}
              />
            </label>




          <label>Model
              <input
                type="text"
                name='model'
                value={inputText.model}
                placeholder="Enter the model..."
                onChange={(event) => inputHandler(event)}
              />
            </label>




            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default WelcomeChoiceButton;

// {
  /*<Text>Previous searches:</Text>
      {previousSearches.map((element) => (
        <Text key={element.id}>{element.reg}</Text>
        ))}*/
// }

// <form onSubmit={this.handleSubmit}>        <label>
//     Name:
//     <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
//   <input type="submit" value="Submit" />
// </form>
