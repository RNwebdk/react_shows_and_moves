//@ts-check
import React, { useState, useContext, useEffect } from "react";
import { ShowContext } from "../../contexts/ShowContext";
import ShowCard from "./ShowCard";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

const ShowList = () => {
  const [searchResult, setSearchResult] = useState([]);

  // @ts-ignore
  const dataFromRedux = useSelector((state) => state.addSearchResultReducer);
  console.log(dataFromRedux);

  useEffect(() => {
    if (dataFromRedux) {
      setSearchResult(dataFromRedux);
    }
  }, [dataFromRedux]);
  // const { shows } = useContext(ShowContext);
  // console.log(shows);

  return (
    <React.Fragment>
      {searchResult && searchResult.length > 0 ? (
        <div className='row mb-5' id='series'>
          {searchResult.map((show) => (
            <ShowCard key={show.show.id} {...show.show} />
          ))}
        </div>
      ) : (
        <div className='empty'>Search above for your favorte show</div>
      )}
    </React.Fragment>
  );
  // return shows && shows.length ? (
  //   <div className='row mb-5' id='series'>
  //     {shows.map((show) => (
  //       <ShowCard />
  //     ))}
  //   </div>
  // ) : (
  //   <div className='empty'>Search above for your favorte show</div>
  // );
};

export default ShowList;
