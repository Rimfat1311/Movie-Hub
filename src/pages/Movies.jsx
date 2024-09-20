// import React from 'react';
// import MovieCard from '../components/MovieCard';
// import { movies } from './movieData';

// const Movies = () => {
//   return (
//     <>
//     <div className=" text-white pt-20 p-8">
//       <h2 className="text-2xl font-bold mb-4">Popular Movie Shows</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {movies.popularMovies.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }

// export default Movies;


import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchTrendingMovies } from './apiService';

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);
    };

    fetchData();
  }, []);
  return (
    <>
    <div className=" text-white pt-20 p-8">
      <h2 className="text-2xl font-bold mb-4">Popular Movie Shows</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {trendingMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Movies;