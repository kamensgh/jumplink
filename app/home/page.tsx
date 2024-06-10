import Banner from '@/components/search/Banner';
import Title from '@/components/titlebar/Title';
import List from '@/components/video/List';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { movieType } from '@/lib/utils';
import Tabs from '@/components/video/Tabs';

export const getMovies = async () => {
  const res = await fetch('http://localhost:3004/movies');
  return res.json();
};

async function Home() {
  const allMovies = await getMovies();

  function filterMovies(latestMovies: IntrinsicAttributes & movieType[]) {
    return latestMovies.filter((movie: movieType) => movie.year >= 2000);
  }

  function topRankingMovies(latestMovies: IntrinsicAttributes & movieType[]) {
    return latestMovies.filter((movie: movieType) => movie.rank <= 10);
  }

  function topRatingMovies(latestMovies: IntrinsicAttributes & movieType[]) {
    return latestMovies.filter(
      (movie: movieType) => parseInt(movie.rating) >= 8.4
    );
  }

  function topActionMovies(latestMovies: IntrinsicAttributes & movieType[]) {
    return latestMovies.filter((movie: movieType) =>
      movie.genre?.includes('Action')
    );
  }

  function topAdventureMovies(latestMovies: IntrinsicAttributes & movieType[]) {
    return latestMovies.filter((movie: movieType) =>
      movie.genre?.includes('Adventure')
    );
  }

  const latestMovies = filterMovies(allMovies);
  const topRanking = topRankingMovies(allMovies);
  const topRating = topRatingMovies(allMovies);
  const actionMovies = topActionMovies(allMovies);
  const adventureMovies = topAdventureMovies(allMovies);
  return (
    <main>
      <Banner />
      <div>
        <Title />

        <div className="container">
          <div>
            <List data={latestMovies} />
          </div>

          <div>
            <Tabs data1={topRanking} data2={latestMovies} />
          </div>
          <div>
            <List data={topRating} title="Top Ranking Movies" />
          </div>
          <div>
            <List data={actionMovies} title="Top Action Movies" />
          </div>
          <div>
            <List data={adventureMovies} title="Top Adventure Movies" />
          </div>
        </div>
      </div>
    </main>
  );
}

Home.requireAuth = true;
export default Home;
