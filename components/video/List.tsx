import React from 'react';
import SingleCardGrid from './SingleCardGrid';
import SingleCardList from './SingleCardList';
import { movieType } from '@/lib/utils';

function List({ data }: any) {
  return (
    <>
      <div className="slider-card-outer no-scrollbar">
        {data.map((movie: any, index: any) => {
          return <SingleCardList key={index} data={movie} />;
        })}
      </div>
    </>
  );
}

export default List;
