import React, { Component } from "react";
import Savebutton from "./Savebutton";

export default class Searchlist extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.book.volumeInfo.title}</h3>
        <h6>Book written by {this.props.book.volumeInfo.authors}</h6>
        <img src={this.props.book.volumeInfo.imageLinks.thumbnails} />
        <p>{this.props.book.volumeInfo.description}</p>
        <a href={this.props.book.volumeInfo.previewLink} target="_blank">
          View
        </a>
        <Savebutton onClick={() => this.props.saveBook(this.props.book)} />
      </div>
    );
  }
}
