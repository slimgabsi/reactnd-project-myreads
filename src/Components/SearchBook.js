import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import Book from "./Book";
import _ from "lodash";
export default class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", books: [] };
    this.handleChange = this.handleChange.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  searchBooks(query) {
    BooksApi.search(query)
      .then((books) => {
        const oldbooks = this.props.books;
        this.mergeBooks(books, oldbooks);
        this.setState({ books: books });
      })
      .catch((err) => console.log(err));
  }

  mergeBooks(newbooks, oldbooks) {
    for (let i = 0; i < newbooks.length; i++) {
      for (let j = 0; j < oldbooks.length; j++) {
        if (newbooks[i].id === oldbooks[j].id) {
          newbooks[i].shelf = oldbooks[j].shelf;
        }
      }
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      query: value,
    }));
  }

  _handleKeyDown = () => {
    this.state.query !== "" && this.searchBooks(this.state.query);
  };

  render() {
    const { query, books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleChange}
              onKeyDown={_.debounce(this._handleKeyDown, 400)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query !== "" &&
              books.length > 0 &&
              this.state.books.map((b) => (
                <Book
                  key={b.id}
                  book={b}
                  onUpdateBooks={this.props.onUpdateBooks}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
