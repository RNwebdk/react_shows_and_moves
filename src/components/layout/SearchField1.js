import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchField1 = () => {
  const useDebounced = (value) => {
    // return a value that doesn't change while the user is typing
    let [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      let timeoutId = setTimeout(() => {
        setDebouncedValue(debouncedValue);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [debouncedValue]);
  };
  const [searchText, setSearchText] = useState('');

  const debounceSearch = useDebounced(searchText);

  return (
    <form action=''>
      <div className='input-group mb-3 mt-4'>
        <div className='input-group-prepend'>
          <span className='input-group-text' id='basic-addon1'>
            Søg Serie
          </span>
        </div>
        <input
          type='text'
          className='form-control'
          aria-label='SearchField'
          id='search'
          aria-describedby='basic-addon1'
          onKeyUp={(e) => setDebouncedValue(e.target.value)}
          onChange={(e) => setDebouncedValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchField1;
