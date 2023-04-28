import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.data.map((movie, index) => (
        <div className="image-container">
          <img src={movie.show.image.medium} alt="movie"></img>
          <div>
            <a href={movie.show.url}>Show Link</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
