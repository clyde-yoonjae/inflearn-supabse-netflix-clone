"use client";

export default function UI({ movie }) {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <img src={movie.image_url} className="w-1/3" />
      <div className="flex w-full flex-col items-center gap-4 p-6 md:w-2/3 md:items-start">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="text-lg font-bold">
          <i className="fas fa-star mr-1" />
          Vote Average : {movie.vote_average}
        </div>
        <div className="text-lg font-bold">Popularity: {movie.popularity}</div>
        <div className="text-lg font-bold">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
