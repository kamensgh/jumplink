import React from 'react';
import SingleCardGrid from './SingleCardGrid';
import SingleCardList from './SingleCardList';


function List() {
  return (
    <>
      <div className="slider-card-outer no-scrollbar">
        {[1, 2, 5, 7, 8, 8, 2, 5, 7, 8, 8].map((index: number) => {
          return <SingleCardList key={index} />;
        })}
      </div>
    </>
  );
}

export default List;
