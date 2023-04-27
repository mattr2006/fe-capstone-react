import React from "react";

const MovieCard = ({ status, image }) => {
  return (
    <div className="Movie-Card-Wrapper">
      <img src={image} alt="Movie Img" />
      <div>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
