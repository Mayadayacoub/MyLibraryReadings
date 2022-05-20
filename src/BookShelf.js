import React, { Component } from "react";
import Books from "./Books";
export class BookShelf extends Component {
  render() {
    const { movedShelf, books } = this.props;
    return (
      <div>
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
        </div>
      </div>
    );
  }
}

export default BookShelf;
