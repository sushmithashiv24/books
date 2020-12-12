import React, { useState } from "react";
import "./styles.css";

const booksDictionary = {
  technology: [
    {
      name: "The Upstarts",
      author: "Brad Stone",
      summary:
        "How Uber, Airbnb, and the Killer Companies of the New Silicon Valley Are Changing the World is a 2017 book by journalist Brad Stone. It chronicles the founding of companies such as Uber and Airbnb, and investigates the evolution of the Silicon Valley"
    },
    {
      name: "Clean Code",
      author: "Robert C. Martin",
      summary:
        "Code is clean if it can be understood easily – by everyone on the team. Clean code can be read and enhanced by a developer other than its original author. With understandability comes readability, changeability, extensibility and maintainability."
    }
  ],
  fiction: [
    {
      name: "The Alchemist",
      author: "Paulo Coehlo",
      summary:
        "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. "
    },
    {
      name: "War and Peace",
      author: "Leo Tolstoy",
      summary:
        " War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature."
    }
  ],
  finance: [
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      summary:
        "Rich Dad Poor Dad is about Robert Kiyosaki and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. You don't need to earn a high income to be rich."
    },
    {
      name: "The millionaire next door",
      author: "Thomas J.Stanley",
      summary: {
        name: "Shoe Dog",
        author: "Phil Knight",
        summary:
          "Shoe Dog is the autobiography of Nike's founder Phil Knight, who at last decided to share the story of how he founded one of the most iconic, profitable and world-changing brands in the world."
      },

      name: "Shoe Dog",
      author: "Phil Knight",
      summary:
        "Shoe Dog is the autobiography of Nike's founder Phil Knight, who at last decided to share the story of how he founded one of the most iconic, profitable and world-changing brands in the world."
    }
  ],
  biography: [
    {
      name: "Shoe Dog",
      author: "Phil Knight",
      summary:
        "Shoe Dog is the autobiography of Nike's founder Phil Knight, who at last decided to share the story of how he founded one of the most iconic, profitable and world-changing brands in the world."
    },
    {
      name: "Becoming",
      author: "Michelle Obama",
      summary:
        "Described by the author as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother."
    }
  ],
  "well-being": [
    {
      name: "The secret",
      author: "Rhonda Byrne",
      summary:
        "The book suggests the notion that like attracts the like, which means if you emit positive energy, it will be very beneficial because you will attract positive things to you."
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      summary:
        "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time."
    }
  ]
};

const genres = Object.keys(booksDictionary);

export default function App() {
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  function genreClickHandler(genre) {
    setGenre(genre);
    setBooks(booksDictionary[genre.toLowerCase()]);
  }

  function inputChangeHandler(event) {
    setGenre(event.target.value);
  }
  return (
    <div className="App">
      <h1>Book Recommender</h1>
      <div className="Form-div">
        <input
          placeholder="Type any genre...."
          onChange={inputChangeHandler}
          value={genre}
          className="App-form App-input"
        />
        <button
          className="App-form  App-btn"
          onClick={() => genreClickHandler(genre)}
        >
          Search
        </button>
      </div>
      <p>Checkout some of the great books in each genre!</p>

      {genres.map((genre) => {
        return (
          <button
            className="genre-item"
            onClick={() => genreClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}

      {books ? (
        books.map((book, index) => {
          return (
            <div key={index} className="App-book">
              <h2>{book.name}</h2>
              <small>
                <strong>Author : </strong>
                {book.author}
              </small>
              <p>
                <strong>Plot Summary : </strong>
                {book.summary}
              </p>
            </div>
          );
        })
      ) : (
        <p>Your search does not have any results</p>
      )}
    </div>
  );
}
