import React from 'react';
import PropTypes from 'prop-types';

const ShowCard = ({ show }) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <div className='card card-inverse card-info'>
        <img className='card-img-top img-fluid' src='http://placehold.it/300x400' alt='showCard' />
        <div className='favoriteButton col-lg-12'>{show.name}</div>
      </div>
    </div>
  );
};

ShowCard.propTypes = {
  show: PropTypes.object
};

export default ShowCard;
