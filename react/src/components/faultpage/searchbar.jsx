import { useState } from 'react';


const SearchBar = ({setSearchedReg}) => {

  const [inputText, setInputText] = useState('');

  const inputHandler = (event) => setInputText(event.target.value);


 const onSearchSubmit = async (event) => {
  event.preventDefault();

  if (!inputText) {
    alert('Please enter a valid registration number');
    return;
  } else {
    setSearchedReg(inputText)

  }
};

  return (
    <div>
      <form className="search-input-box-form" onSubmit={(event) => onSearchSubmit(event)}>
        <label>
          <input
            type="text"
            value={inputText}
            placeholder="Enter a registration number..."
            onChange={(event) => inputHandler(event)}
          />
          <input type="submit" value="Submit"/>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
