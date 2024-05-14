import { API_URL } from "@/constants";
import styles from "../styles/movie-vidoes.module.css";

async function getVideos(id: string) {
  // console.log(`Fecthing videos: ${new Date().toLocaleString()}`);
  const response = await fetch(`${API_URL}/${id}/videos`);
  const videos = await response.json();
  // console.log(`Fecthed videos: ${new Date().toLocaleString()}`);
  return videos;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video: Video) => (
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen={true}
          key={video.id}
        />
      ))}
    </div>
  );
}
