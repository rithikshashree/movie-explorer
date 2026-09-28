import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { searchMovies } from "../services/api";
import "../styles/Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (movieName) => {
    setLoading(true);
    setError("");

    try {
      const data = await searchMovies(movieName);

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setMovies([]);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <Navbar />

      <SearchBar onSearch={handleSearch} />

      <Filter onSearch={handleSearch} />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default Home;