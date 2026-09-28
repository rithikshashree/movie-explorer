import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movie.trim()) return;

    onSearch(movie);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;