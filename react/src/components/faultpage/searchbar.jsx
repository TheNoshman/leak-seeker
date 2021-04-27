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
    <div className='search-bar-cont'>
      <form className="search-input-box-form" onSubmit={(event) => onSearchSubmit(event)}>
        <label>
          <input
            className='fault-search-input'
            type="text"
            value={inputText}
            placeholder="Enter a registration number..."
            onChange={(event) => inputHandler(event)}
          />
          <input className='sub-btn' type="submit" value="Search"/>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
