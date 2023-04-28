import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import FooterComp from "../components/FooterComp";
import "../components/FooterStyle.css";
import "../App.css";

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
  console.log(data);

  return (
    <div className="main-content-wrapper">
      <div className="main-heading">
        <h1>Show Gallery</h1>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Fetch Data</button>
        </form>
        {data ? (
          <div className="show-wrapper">
            <h1>Fetched Shows</h1>
            <MovieCard data={data} />
          </div>
        ) : (
          <p>No data fetched yet.</p>
        )}
        <FooterComp />
      </div>
    </div>
  );
}
