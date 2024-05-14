import { API_URL } from "@/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovieInfo(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const movieData = await response.json();
  return movieData;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieInfo(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noreferrer">
          Homepage &rarr;
        </a>
        {movie.production_companies.length > 0 && (
          <div className={styles.logo_container}>
            {movie.production_companies.map((company: any) => (
              <img
                key={company.id}
                src={company.logo_path}
                alt={company.name}
                className={styles.production_logo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
