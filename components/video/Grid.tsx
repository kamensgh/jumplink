import React from 'react';
import SingleCard from './SingleCardGrid';

function Grid() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((index: number) => {
            return <SingleCard key={index} />;
          })}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
