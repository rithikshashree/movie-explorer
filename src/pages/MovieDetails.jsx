import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import Loader from "../components/Loader";
import Error from "../components/Error";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        width="300"
        style={{ borderRadius: "10px" }}
      />

      <div>
        <h1>{movie.Title}</h1>

        <p><strong>Year:</strong> {movie.Year}</p>

        <p><strong>Genre:</strong> {movie.Genre}</p>

        <p><strong>Director:</strong> {movie.Director}</p>

        <p><strong>Actors:</strong> {movie.Actors}</p>

        <p><strong>Language:</strong> {movie.Language}</p>

        <p><strong>Runtime:</strong> {movie.Runtime}</p>

        <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>

        <p><strong>Plot:</strong></p>

        <p>{movie.Plot}</p>

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
            }}
          >
            ← Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;