import { useState } from 'react';
import { onSearchSubmit } from '../../service/service-api';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');

  const inputHandler = (event) => setInputText(event.target.value);

  return (
    <div>
      <form className="search-input-box-form" onSubmit={(event) => onSearchSubmit(inputText, event)}>
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
