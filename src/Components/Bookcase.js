import React, { Component } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
export default class Bookcase extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.props.categories.map((cat) => (
          <Category
            categorie={cat.name}
            onUpdateBooks={this.props.onUpdateBooks}
            key={cat.key}
            books={this.props.onCategorizeBooks(cat.key)}
          />
        ))}
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
