import React, { Component } from "react";
import API from "../utils/API";
export default class Saved extends Component {
  state = { savedBooks: [] };
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getSavedBooks().then((res) => {
      this.setState({
        savedBooks: res.data,
      });
    });
  };
  deleteBook = (id) => {
    API.deleteBook(id).then(() => this.loadBooks());
  };
  render() {
    return (
      <div>
        {this.state.savedBooks.map((book) => (
          <div className="p-3 my-5 border border-dark" key={book._id}>
            <h3>{book.title}</h3>
            <h6>Book written by {book.authors}</h6>
            <img src={book.image} />
            <p>
              {book.description}{" "}
              <a href={book.link} target="_blank">
                View More >
              </a>
            </p>

            <button onClick={() => this.deleteBook(book._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}
