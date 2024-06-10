import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { movieType } from '@/lib/utils';

function SingleCardTabs({ data }: IntrinsicAttributes & movieType) {
  return (
    <div>
      <div className=" h-36 min-w-80 rounded-md overflow-hidden relative cursor-pointer">
        <img
          src={data.image}
          alt=""
          className=" h-full w-full object-cover brightness-50"
        />
        <div className=" absolute left-[42%] bottom-[37%] text-white text-5xl">
          <FaPlay />
        </div>
      </div>
      <div className="slider-text">{data.title}</div>
    </div>
  );
}

export default SingleCardTabs;
