import React, { useState, useContext } from "react";
import axios from "axios";
import { ShowContext } from "../../contexts/ShowContext";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../../redux/actions/add-search-result-action";

const SearchField = () => {
  const { dispatch } = useContext(ShowContext);
  const [searchText, setSearchText] = useState("");
  const [shows, setShows] = useState([]);

  const dispatchToRedux = useDispatch();

  const submitSearch = async (e) => {
    e.preventDefault();

    if (searchText !== "") {
      // console.log(`http://api.tvmaze.com/search/shows?q=${searchText}`);

      const res = await axios
        .get(`http://api.tvmaze.com/search/shows?q=${searchText}`)
        .catch((err) => console.error(err));

      // setShows(res.data);
      dispatch({ type: "SEARCH_SHOWS", payload: res.data });

      if (res.data) {
        dispatchToRedux(addSearchResult(res.data));
      }

      console.log(shows);
    } else {
      //Clear
      console.log("testfield empty, clear the results pleace");
    }
  };

  return (
    <form onSubmit={submitSearch}>
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
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
      <div className='input-group'>
        <input
          type='submit'
          className='form-control btn-block btn btn-primary'
          value='Submit'
        />
      </div>
    </form>
  );
};

export default SearchField;
