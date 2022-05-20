import React, { Component } from "react";
import PropTypes from "prop-types";

export class Books extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    // books: PropTypes.array.isRequired,
  };

  render() {
    const { book, currentSelect, movedShelf } = this.props;
    const currentThumbnail = book.imageLinks && book.imageLinks.thumbnail;
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 174,
                backgroundImage: `url("${currentThumbnail}")`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={(event) => movedShelf(book, event.target.value)}
                value={currentSelect}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </div>
    );
  }
}

export default Books;
