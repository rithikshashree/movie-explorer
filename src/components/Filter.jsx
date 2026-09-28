function Filter({ onSearch }) {
  const categories = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Animation",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSearch(category)}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            background: "#0077ff",
            color: "white",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;