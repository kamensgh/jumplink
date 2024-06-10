import React from 'react';

export const getMovies = async (props: any) => {
  const dynamicParams = props.params;
  const res = await fetch(`http://localhost:3004/movies/${dynamicParams.id}`);
  return res.json();
};

export default async function DynamicRouteParam(props: any) {
  const sinlgeMovies = await getMovies(props);

  return (
    <main>
      <div className="py-9">
        <div className="container"></div>
      </div>
    </main>
  );
}
