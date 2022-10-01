import React from "react";

const Book = (props) => {
  const clickHandler = () => {
    alert("bought");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" className="bookImg" />
      <h2>{title.toUpperCase()}</h2>
      <h4>{author}</h4>
      <button type="button" className="button" onClick={clickHandler}>
        Buy
      </button>
      <button
        type="button"
        className="button"
        onClick={() => complexExample(author)}
      >
        Author
      </button>
    </article>
  );
};

export default Book;
