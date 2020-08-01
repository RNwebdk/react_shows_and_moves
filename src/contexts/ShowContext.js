import React, { createContext, useReducer, useEffect } from 'react';
import { showReducer } from '../reducers/ShowReducer';

export const ShowContext = createContext();

function ShowContextProvider(props) {
  // Favorite shows
  const [shows, dispatch] = useReducer(showReducer, [], () => {
    // const localData = localStorage.getItem('favoriteShows');
    // return localStorage ? JSON.parse(localData) : [];
  });

  // when ever the data changes, run this hook
  useEffect(() => {
    // localStorage.setItem('favoriteShows', JSON.stringify(shows));
  }, [shows]);

  return (
    <ShowContext.Provider value={{ shows, dispatch }}>
      {props.children}
    </ShowContext.Provider>
  );
}

export default ShowContextProvider;
