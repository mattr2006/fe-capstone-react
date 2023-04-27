import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Gallery() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  const fetchApiData = async (inputValue) => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=/${inputValue}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApiData(input);
  };

  return (
    <div className="main-content-wrapper">
      <div className="main-heading">
        <h1>Show Gallery</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Fetch Data</button>
        </form>
        {data ? (
          <div>
            <h1>Fetched Shows</h1>
            <pre>{JSON.stringify(data, null, 1)}</pre>
          </div>
        ) : (
          <p>No data fetched yet.</p>
        )}
      </div>
    </div>
  );
}

// {MovieCard((movie, index) => {
//   return <MovieCard key={index} {...movie} />;
// })}
