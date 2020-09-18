import React, { Component } from "react";
import Searchbar from "./Searchbar";
import API from "../utils/API";
export default class Search extends Component {
  state = { value: "", books: [] };
  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Searchbar
          handleInputChange={this.handleInputChange}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    );
  }
}
