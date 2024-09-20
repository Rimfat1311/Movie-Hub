// import React from 'react';
// import MovieCard from '../components/MovieCard';
// import { movies } from './movieData';

// const TvShows = () => {
//   return (
//     <>
//     <div className=" text-white pt-20 p-8">
//       <h2 className="text-2xl font-bold mb-4">Popular TV Shows</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {movies.popularTv.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//     </div>
      
//     </>
//   );
// }

// export default TvShows;


import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { fetchPopularTvShows } from './apiService';

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect (() => {
    const fetchTvShows = async () => {
      const response = await fetchPopularTvShows();
      setTvShows(response);
    }

    fetchTvShows();
  }, []);

  return (
    <>
    <div className=" text-white pt-20 p-8">
      <h2 className="text-2xl font-bold mb-4">Popular TV Shows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tvShows.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
      
    </>
  );
}

export default TvShows;