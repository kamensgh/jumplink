'use client';
import { movieType, titleCase } from '@/lib/utils';
import React, { useState } from 'react';
import SingleCardTabs from './SingleCardTabs';

enum STEPS {
  STEP_1_POPULAR = 'popular',
  STEP_2_THEATERS = 'in theaters',
}

function Tabs({ data1, data2 }: IntrinsicAttributes & movieType[]) {
  const [active, setActive] = useState<STEPS>(STEPS.STEP_1_POPULAR);
  return (
    <>
      <div>
        <div className="w-full rounded h-80 m-auto shadow flex flex-col mb-16">
          <div className="flex mt-4 items-center gap-4 flex-col md:flex-row">
            <h2 className="text-white font-bold text-lg md:text-xl">
              Latest Trailers
            </h2>
            <div className=" shadow rounded-full h-10 flex p-1 relative items-center border">
              <div
                className="flex justify-center w-32"
                onClick={() => setActive(STEPS.STEP_1_POPULAR)}
              >
                <button className="text-white">Popular</button>
              </div>
              <div
                className="flex justify-center w-32"
                onClick={() => setActive(STEPS.STEP_2_THEATERS)}
              >
                <button className="text-white">In Theaters</button>
              </div>
              <span
                className={`bg-gray-800 shadow text-white flex items-center justify-center w-32 rounded-full h-8 transition-all top-[3px] absolute ${
                  active === STEPS.STEP_1_POPULAR ? 'left-1' : 'left-[133px]'
                } `}
              >
                {titleCase(active)}
              </span>
            </div>
          </div>
          {active === STEPS.STEP_1_POPULAR ? (
            <div className="inline-block my-8">
              <div className="overflow-auto no-scrollbar flex gap-4">
                {data1.map((movie: movieType) => (
                  <SingleCardTabs key={movie.id} data={movie} />
                ))}
              </div>
            </div>
          ) : null}
          {active === STEPS.STEP_2_THEATERS ? (
            <div className="inline-block my-8">
              <div className="overflow-auto no-scrollbar flex gap-4">
                {data2.map((movie: movieType) => (
                  <SingleCardTabs key={movie.id} data={movie} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Tabs;
