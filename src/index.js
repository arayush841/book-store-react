import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { books } from "./books";
import Book from "./Book";
import { greeeting } from "./testing/testing";

function BookList() {
  console.log(greeeting);
  return (
    <section className="booklist">
      <h1 className="heading">BOOK STORE</h1>
      <br />
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Helloworld")
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
