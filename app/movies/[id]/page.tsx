import React from 'react';
import {movieType} from "@/lib/utils"
import { FaPlay } from 'react-icons/fa';
import List from '@/components/video/List';

export const getMovies = async (props: any) => {
  const dynamicParams = props.params;
  const res = await fetch(`http://localhost:3004/movies/${dynamicParams.id}`);
  return res.json();
};

export default async function DynamicRouteParam(props: any) {
  const sinlgeMovies: movieType = await getMovies(props);

  return (
    <main>
      <div className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="">
              <div className="overflow-hidden mx-10 lg:ml-auto">
                <img
                  src={sinlgeMovies?.image}
                  alt={sinlgeMovies?.title}
                  className="w-full rounded-md "
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-white">
                <h1 className="text-3xl font-bold">{sinlgeMovies?.title}</h1>
                <p className="text-lg text-gray-300 ">
                  {sinlgeMovies?.genre?.flat()}
                </p>
                <p className="text-lg">({sinlgeMovies?.year})</p>
                <p className="text-lg mb-2">Rating: {sinlgeMovies?.rating}</p>
                <p className=" inline-block p-1 px-2 text-lg border mb-5">
                  {sinlgeMovies?.rank}
                </p>
                <div className="flex gap-3 items-center mb-10 mt-7 text-xl cursor-pointer">
                  <FaPlay /> Play movie trailer
                </div>
                <h2 className="font-bold text-2xl mb-2">Overview</h2>
                <p className="text-lg font-normal italic">
                  {sinlgeMovies?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <List title="Similar Movies" /> */}
      </div>
    </main>
  );
}
