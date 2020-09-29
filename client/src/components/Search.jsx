import React, { Component } from "react";
import Searchbar from "./Searchbar";
import API from "../utils/API";
import Searchlist from "./Searchlist";
export default class Search extends Component {
  state = { value: "", books: [] };
  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    API.getBooks(this.state.value).then((res) => {
      console.log(res);
      this.setState({ books: res.data.items });
      console.log(this.state.books);
    });
  };
  newBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };
  saveBook = (book) => {
    let someBook = this.newBook(book);
    console.log(someBook);
    API.saveBook(someBook)
      .then(() => {
        console.log(someBook);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Searchbar
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <div>
          {this.state.books.map((book) => {
            return (
              // <Searchlist key={book.id} book={book} saveBook={this.saveBook} />
              <div key={book.id}>
                <h3>{book.volumeInfo.title}</h3>
                <h6>Book written by {book.volumeInfo.authors}</h6>
                {/* <img src={book.volumeInfo.imageLinks.thumbnail} alt="thumbnail" /> */}
                <p>{book.volumeInfo.description}</p>
                <a href={book.volumeInfo.previewLink} target="_blank">
                  View
                </a>
                <button onClick={() => this.saveBook(book)}>Save</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
