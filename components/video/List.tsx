import React from 'react';
import SingleCardList from './SingleCardList';
import { movieType } from '@/lib/utils';
import { title } from 'process';

function List({ data, title }: IntrinsicAttributes & movieType[]) {
  return (
    <>
      {title && (
        <h1 className="text-lg md:text-xl text-white font-bold mb-7">
          {title}
        </h1>
      )}

      <div className="slider-card-outer no-scrollbar">
        {data.map((movie: movieType, index: any) => {
          return <SingleCardList key={index} data={movie} />;
        })}
      </div>
    </>
  );
}

export default List;
