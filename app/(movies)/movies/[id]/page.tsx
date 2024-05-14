import MovieInfo, { getMovieInfo } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovieInfo(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetailPage({ params: { id } }: Params) {
  return (
    <div>
      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
