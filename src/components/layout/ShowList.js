import React, { useState, useContext } from 'react';
import { ShowContext } from '../../contexts/ShowContext';
import ShowCard from './ShowCard';

const ShowList = () => {
  const { shows } = useContext(ShowContext);

  console.log('ShowList', shows);

  return shows && shows.length ? (
    <div className='row mb-5' id='series'>
      {shows.map(({ show }) => (
        <ShowCard show={show} key={show.id} />
      ))}
    </div>
  ) : (
    <div className='empty'>Search above for your favorte show</div>
  );
};

export default ShowList;
