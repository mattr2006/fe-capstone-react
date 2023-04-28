import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.data.map((movie, index) => (
        <div className="image-container">
          <img src={movie.show.image.medium} alt="movie"></img>
          <div>
            <h4 placeholder="Title">{movie.show.name}</h4>
          </div>
          <div className="link-wrapper">
            <a href={movie.show.url}>Show Link</a>
            <hr></hr>
            <br></br>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
