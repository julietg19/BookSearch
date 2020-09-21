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

  render() {
    return (
      <div>
        <Searchbar
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <div>
          {this.state.books.map((book) => {
            return <Searchlist key={book.id} book={book} saveBook={this.saveBook} />;
          })}
        </div>
      </div>
    );
  }
}
