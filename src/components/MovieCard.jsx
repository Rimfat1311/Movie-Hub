// import React from "react";

// const MovieCard = ({ title, releaseDate, rating, imageUrl, trendingRank }) => {
//   return (
//     <div className="relative text-white bg-gray-600 rounded-lg overflow-hidden">
//       <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
//       {trendingRank && (
//         <div className="absolute top-4 left-0 bg-opacity-50 bg-gray-600 text-lg px-4 rounded-e-xl font-light">
//           #{trendingRank} Trending
//         </div>
//       )}

//       <div className="p-4">

//         <h3 className="text-lg font-bold">{title}</h3>
//         <p className="text-sm">{releaseDate}</p>
//         <p className="text-sm font-bold">{rating}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;


// import React from "react";

// const MovieCard = ({ title, releaseDate, rating, imageUrl, trendingRank }) => {
//   return (
//     <div className="relative text-white bg-gray-600 rounded-lg overflow-hidden">
//       <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
//       {trendingRank && (
//         <div className="absolute top-4 left-0 bg-opacity-50 bg-gray-600 text-lg px-4 rounded-e-xl font-light">
//           #{trendingRank} Trending
//         </div>
//       )}
//       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
//         <h3 className="text-lg font-bold">{title}</h3>
//         <p className="text-sm">{releaseDate}</p>
//         <p className="text-sm font-bold">{rating}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;


// // MovieCard.js

const MovieCard = ({ title, overview, poster_path, vote_average, popularity }) => {
    return (
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <h3>{title}</h3>
        <p>{overview}</p>
        <div className="flex items-center gap-4">
          <p>Rating: {vote_average}</p><span>|</span><p>Popularity: {popularity}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  
  
  