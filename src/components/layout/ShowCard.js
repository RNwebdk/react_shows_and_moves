import React from "react";

const ShowCard = ({ image, name }) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mt-4'>
      <div className='card card-inverse card-info'>
        <img
          className='card-img-top img-fluid'
          src={image?.medium}
          alt='showCard'
        />
        <div className='favoriteButton col-lg-12'>{name}</div>
      </div>
    </div>
  );
};

export default ShowCard;
