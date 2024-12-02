"use client";
import { Spinner } from "@material-tailwind/react";
import MovieCard from "./movie-card";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "actions/movieActions";

export default function MovieCardList() {
    const getAllMovieQuery = useQuery({
        queryKey:['movie'],
        queryFn: ()=> searchMovies()
      })
  return (
    <div className="grid gap-1 md:grid-cols-4 grid-cols-3 w-full h-full">
        {getAllMovieQuery.isLoading && <Spinner />}
        {getAllMovieQuery.data && getAllMovieQuery.data.map(movie => <MovieCard movie={movie} key={movie.id}/>)}

    </div>
  );
}