import Banner from '@/components/search/Banner';
import Title from '@/components/titlebar/Title';
import List from '@/components/video/List';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { movieType } from '@/lib/utils';

export const getMovies = async () => {
  const res = await fetch('http://localhost:3004/movies');
  return res.json();
};

async function Home() {
  const latestMovies = await getMovies();

  function filterMovies(latestMovies: [movieType]) {
    return latestMovies.filter((movie) => movie.year >= 2000);
  }

const latestMovies2023 = filterMovies(latestMovies);
  return (
    <div>
      <Banner />
      <div>
        <Title />

        <div className="container">
          <div>
            <List data={latestMovies2023} />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.requireAuth = true;
export default Home;
