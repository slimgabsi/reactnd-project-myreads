import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBook from "./Components/SearchBook";

import Bookcase from "./Components/Bookcase";
import * as BooksAPI from "./BooksAPI";
class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.categorizeBooks = this.categorizeBooks.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
  }

  categorizeBooks(catkey) {
    return this.state.books.filter((book) => book.shelf === catkey);
  }
  updateBooks(book) {
    const index = this.state.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      const updatedBooks = this.state.books;
      updatedBooks[index] = book;
      this.setState(() => ({
        books: updatedBooks,
      }));
    } else {
      this.setState((prevState) => ({
        books: [...prevState.books, book],
      }));
    }

    BooksAPI.update(book, book.shelf)
      .then()
      .catch((er) => {
        console.log(er);
      });
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    const categories = [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Have Read" },
    ];

    return (
      <div className="app">
        <Routes>
          <Route
            exact
            path="/search"
            element={
              <SearchBook
                onUpdateBooks={this.updateBooks}
                books={this.state.books}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <Bookcase
                categories={categories}
                onUpdateBooks={this.updateBooks}
                onCategorizeBooks={this.categorizeBooks}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
