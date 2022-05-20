import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";
import { Link } from "react-router-dom";
export class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,

    // onDeleteContact: PropTypes.func.isRequired,
  };
  state = {
    query: "",
    searchedBooks: [],
  };
  updatedQuery = (query) => {
    this.setState({ query: query });
    this.updatedSearchBooks(query);
  };

  updatedSearchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };
  updatedSearchAuthors = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedAuthor) => {
        if (searchedAuthor.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedAuthor: searchedAuthor });
        }
      });
    } else {
      this.setState({ searchedAuthor: [] });
    }
  };
  render() {
    const { query, searchedBooks } = this.state;
    const { books, movedShelf } = this.props;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.updatedQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
              {searchedBooks.map((searchedBook) => {
                let shelf = "none";
                books.map(
                  (book) => book.id === searchedBook.id && (shelf = book.shelf)
                );
                return (
                  <li key={searchedBook.id}>
                    <Books
                      book={searchedBook}
                      movedShelf={movedShelf}
                      currentSelect={shelf}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
