"use client";

import MovieCardList from "components/movie-lcard-list";

export default function UI() {
  const getAllMovieQuery = useQuery({
    queryKey:['movie'],
    queryFn:getAllMovies
  })
  return (
    <main className="mt-16">
    <MovieCardList />
    </main>
  );
}