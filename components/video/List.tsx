import React from 'react';
import SingleCardGrid from './SingleCardGrid';

function List() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((index: number) => {
          return <SingleCardGrid key={index} />;
        })}

        <div>
          <SingleCardGrid />
        </div>
      </div>
    </div>
  );
}

export default List;
