import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPlaces } from '../actions/placesActions';

const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getPlaces(query));
    setQuery('');
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AutocompleteInput;
