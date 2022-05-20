import React, { Component } from "react";
import PropTypes from "prop-types";
import Books from "./Books";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
export class MainPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    movedShelf: PropTypes.func.isRequired,
  };

  render() {
    const { movedShelf, books } = this.props;
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                {/* 
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter((book) => book.shelf === "currentlyReading")
                      .map((book) => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            movedShelf={movedShelf}
                            currentSelect="currentlyReading"
                          />
                        </li>
                      ))}
                  </ol>
                </div> */}
                <BookShelf
                  books={this.props.books}
                  movedShelf={this.props.movedShelf}
                />
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter((book) => book.shelf === "wantToRead")
                      .map((book) => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            movedShelf={movedShelf}
                            currentSelect="wantToRead"
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter((book) => book.shelf === "read")
                      .map((book) => (
                        <li key={book.id}>
                          <Books
                            book={book}
                            movedShelf={movedShelf}
                            currentSelect="read"
                          />
                        </li>
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" className="open-search ">
              Add a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
