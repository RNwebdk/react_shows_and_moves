import React, { Fragment } from 'react';
import SearchField from '../layout/SearchField';
import ShowList from '../layout/ShowList';

const Home = () => {
  return (
    <Fragment>
      <SearchField />
      <ShowList />
    </Fragment>
  );
};

export default Home;
