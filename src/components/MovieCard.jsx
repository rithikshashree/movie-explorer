import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/220x330?text=No+Image"
        }
        alt={movie.Title}
      />

      <h3>{movie.Title}</h3>

      <p>{movie.Year}</p>

      <Link to={`/movie/${movie.imdbID}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default MovieCard;