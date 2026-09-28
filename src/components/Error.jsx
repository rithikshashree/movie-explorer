function Error({ message }) {
  return (
    <h2
      style={{
        color: "red",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      {message}
    </h2>
  );
}

export default Error;