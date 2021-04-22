import { useState } from 'react';
import '../css/welcomecomponent.css'

const WelcomeChoiceButton = ({ searchType }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [logClicked, setLogClicked] = useState(false);

  const [inputText, setInputText] = useState({
    reg: '',
    make: '',
    model: ''
  });


  const inputHandler = (event) => setInputText({...inputText, [event.target.name]: event.target.value,})


  return (
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
          <form>
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
          <p>{inputText.reg}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}

      {/*IF REGISTER FAULT BUTTON IS CLICKED*/}
      {logClicked && (
        <div className='input-box-div'>
          <form>
            <label>
              <input
                type="text"
                name='reg'
                value={inputText.reg}
                placeholder="Enter your registration number..."
                onChange={(event) => inputHandler(event)}
              />
            </label>

          <p>Your reg:</p>
          <p>{inputText.reg}</p>



          <label>
              <input
                type="text"
                name='make'
                value={inputText.make}
                placeholder="Enter your vehicles manufacturer..."
                onChange={(event) => inputHandler(event)}
              />
            </label>

          <p>Make:</p>
          <p>{inputText.make}</p>


          <label>
              <input
                type="text"
                name='model'
                value={inputText.model}
                placeholder="Enter the model..."
                onChange={(event) => inputHandler(event)}
              />
            </label>

          <p>Make:</p>
          <p>{inputText.model}</p>


            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default WelcomeChoiceButton;

{
  /*<Text>Previous searches:</Text>
      {previousSearches.map((element) => (
        <Text key={element.id}>{element.reg}</Text>
        ))}*/
}

// <form onSubmit={this.handleSubmit}>        <label>
//     Name:
//     <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
//   <input type="submit" value="Submit" />
// </form>
