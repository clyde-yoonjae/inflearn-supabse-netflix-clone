"use client";

import { Spinner } from "@material-tailwind/react";
import MovieCard from "./movie-card";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "actions/movieActions";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const getAllMovieQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => searchMovies(search),
  });

  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 md:grid-cols-4">
      {getAllMovieQuery.isLoading && <Spinner />}
      {getAllMovieQuery.data &&
        getAllMovieQuery.data.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
}
