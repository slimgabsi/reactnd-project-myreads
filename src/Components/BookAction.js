import React, { Component } from "react";

export default class BookAction extends Component {
  constructor(props) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(event) {
    const updatedBook = this.props.book;
    updatedBook.shelf = event.target.value;
    this.props.onUpdateBooks(updatedBook);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book.shelf ? this.props.book.shelf : "none"}
          onChange={this.onChangeValue}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
