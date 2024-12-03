import { getMovie } from "actions/movieActions";
import UI from "./ui";

export async function generateMetadata({ params, searchParams }) {
  const movie = await getMovie(params.id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [movie.image_url],
    },
  };
}

export default async function MovieDetail({ params }) {
  const movie = await getMovie(params.id);

  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 flex w-full items-center bg-blue-50 py-16">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>}
    </main>
  );
}
