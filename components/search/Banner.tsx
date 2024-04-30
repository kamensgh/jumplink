import React from 'react'

const Banner = () => {
  return (
    <div className=" h-60 w-full bg-slate-600 flex justify-center items-center p-6 bg-hero bg-cover bg-center">
      <div className="mx-auto w-full max-w-3xl">
        <input
          type="text"
          className="w-full h-14 px-4 lg:px-6 rounded-s-full rounded-e-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Banner