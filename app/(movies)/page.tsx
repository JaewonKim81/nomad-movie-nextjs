import Movie from "@/components/movie";
import React from "react";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovies() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const movies = await response.json();
  return movies;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: MovieProps) => (
        <Movie
          key={movie.id}
          id={movie.id.toString()} // Convert movie.id to a string
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
