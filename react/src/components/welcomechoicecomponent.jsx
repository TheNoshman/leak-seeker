import { useState } from 'react';

const WelcomeChoiceButton = ({ searchType }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [logClicked, setLogClicked] = useState(false);
  const [inputText, setInputText] = useState('');


  const inputHandler = (event) => setInputText(event.target.value)

  return (
    <div>
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

      {searchClicked && (
        <div>
          <form>
            <label>
              <input
                type="text"
                value={inputText}
                placeholder="Enter a registration number..."
                onChange={(event) => inputHandler(event)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <p>Your reg:</p>
          <p>{inputText.toString()}</p>
        </div>
      )}

      {logClicked && (
        <div>
          <form>
            <label>
              <input
                type="text"
                value={inputText}
                placeholder="Enter a registration number..."
                onChange={(event) => inputHandler(event)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <p>Your reg:</p>
          <p>{inputText.toString()}</p>
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
