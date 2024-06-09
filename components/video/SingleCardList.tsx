import Link from 'next/link';
import React from 'react'

function SingleCardList({ data }) {
  return (
    <>
      <Link href={`/movies/${data.id}`}>
        <div className="slider-inner hover:translate-y-1 transition-all">
          <div className="slider-image">
            <img src={data.image} />
            <div className="slider-badge"> {data.year}</div>
          </div>
          <div>
            <div className="slider-text"> {data.title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleCardList;