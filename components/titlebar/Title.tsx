import React from 'react';
import Filters from './Filters';

function Title() {
  return (
    <div>
      <div className="flex align-middle justify-start pt-10 pb-8">
        <div>
          <h4 className="font-bold mr-10">Trending</h4>  
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Title;
