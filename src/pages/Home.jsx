// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import MovieCard from '../components/MovieCard';
// import { movies } from "./movieData";

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// const Home = () => {
//   return (
//     <div>
//     <section className="hero-section w-full h-screen flex items-center justify-center bg-gray-100">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }} 
//         navigation 
//         modules={[Autoplay, Pagination, Navigation]}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <div 
//             className=" flex flex-col items-start px-10 justify-center  h-screen text-white bg-cover bg bg-center" 
//             style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg)' }}
//           >
//             <div className="w-full absolute bottom-10 max-w-md px-3">
//               <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">Despicable Me 4</h2>
//               <p className="text-ellipsis line-clamp-3 my-2 text-gray-400">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div className="flex items-center gap-4">
//                 <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
//               </div>
//               <a href="/movie/519182">
//                 <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div 
//             className="hero-slide flex flex-col items-start px-10 h-screen text-white bg-cover bg-center" 
//             style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg")' }}
//           >
//             <div className="w-full absolute bottom-10 max-w-md px-3">
//               <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">House of the Dragon</h2>
//               <p className="text-ellipsis line-clamp-3 my-2 text-gray-400">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div className="flex items-center gap-4">
//                 <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
//               </div>
//               <a href="/movie/519182">
//                 <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div 
//             className="hero-slide flex flex-col items-start px-10 justify-center h-screen text-white bg-cover bg-center" 
//             style={{ backgroundImage: 'url("https://image.tmdb.org/t/p/original/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg")' }}
//           >
//             <div className="w-full absolute bottom-10 max-w-md px-3">
//               <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">Law & Order: Special...</h2>
//               <p className="text-ellipsis line-clamp-3 my-2 text-gray-400">Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.</p>
//               <div className="flex items-center gap-4">
//                 <p>Rating: 7.4+</p><span>|</span><p>View: 4182</p>
//               </div>
//               <a href="/movie/519182">
//                 <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>

//     <div className=" text-white p-8">
//       <h2 className="text-2xl font-bold mb-4">Trending</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         {movies.trending.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {movies.nowPlaying.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">Top Rated movies</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {movies.topRated.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">Popular Tv Show</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {movies.popularTv.map((movie, index) => (
//           <MovieCard key={index} {...movie} />
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">On The Airf</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {movies.onThe.map((movie, index) => (
//           <MovieCard key={index} {...movie} />+
//         ))}
//       </div>
//     </div>
      
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MovieCard from '../components/MovieCard';
import { fetchTrendingMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchPopularTvShows, fetchOnTheAirTvShows } from './apiService';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [onTheAirTvShows, setOnTheAirTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);

      const nowPlaying = await fetchNowPlayingMovies();
      setNowPlayingMovies(nowPlaying);

      const topRated = await fetchTopRatedMovies();
      setTopRatedMovies(topRated);

      const popularTv = await fetchPopularTvShows();
      setPopularTvShows(popularTv);

      const onTheAir = await fetchOnTheAirTvShows();
      setOnTheAirTvShows(onTheAir);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="hero-section w-full h-screen flex items-center justify-center bg-gray-100">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }} 
          navigation 
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {trendingMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div 
                className=" flex flex-col items-start px-10 justify-center  h-screen text-white bg-cover bg bg-center" 
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
              >
                <div className="w-full absolute bottom-10 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">{movie.title}</h2>
                  <p className="text-ellipsis line-clamp-3 my-2 text-gray-400">{movie.overview}</p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {movie.vote_average}</p><span>|</span><p>View: {movie.popularity}</p>
                  </div>
                  <a href={`/movie/${movie.id}`}>
                    <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">Play Now</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className=" text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Trending</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {trendingMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {nowPlayingMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Top Rated movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topRatedMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Popular Tv Show</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularTvShows.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">On The Air</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {onTheAirTvShows.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

