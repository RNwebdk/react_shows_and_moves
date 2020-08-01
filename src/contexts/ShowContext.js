import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { showReducer } from '../reducers/ShowReducer';

export const ShowContext = createContext();

function ShowContextProvider(props) {
  // Favorite shows
  // const [shows, dispatch] = useReducer(showReducer, [], () => {
  //   // const localData = localStorage.getItem('favoriteShows');
  //   // return localStorage ? JSON.parse(localData) : [];
  // });

  // WE CAN JUST PASS THE REDUCER AS THE FIRST ARGUMENT
  // AND THE INITIAL STATE AS THE 2ND ARGUMENT
  const [state, dispatch] = useReducer(showReducer, {
    shows: []
  });

  // WE'RE CREATING AN ACTION HERE LIKE WE WOULD IN REDUX
  const searchShows = async (searchText = '') => {
    // console.log(`http://api.tvmaze.com/search/shows?q=${searchText}`);

    // TIP: YOU CAN DESTRUCTURE  { data } BECAUSE AXIOS WILL ALWAYS PUT
    //      THE RESPONSE IN THE .data KEY
    const { data } = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchText}`);
    dispatch({ type: 'SEARCH_SHOWS', payload: data });

    // YOU SHOULD PROBABLY CREATE A SEPARATE FUNCTION TO CLEAR THE SHOWS
    // SINCE THERE IS A FLUX LIKE FLOW HAPPENING WITH THE CONTEXT
    // else {
    //   //Clear
    //   console.error('testfield empty, clear the results pleace');
    // }
  };

  // when ever the data changes, run this hook
  // useEffect(() => {
  // localStorage.setItem('favoriteShows', JSON.stringify(shows));
  // }, [shows]);

  return (
    <ShowContext.Provider value={{ shows: state.shows, searchShows }}>
      {props.children}
    </ShowContext.Provider>
  );
}

export default ShowContextProvider;
