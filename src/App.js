import React from "react";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollTop from "./ScrollTop";

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  };
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }
  movedShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  };

  render() {
    // console.log(this.state.books);

    return (
      <div className="app">
        {/* {this.state.showSearchPage ? <SearchPage /> : <MainPage />} */}
        <ScrollTop ScrollSteps="40" transInMin="40" />
        <Switch>
          <Route
            path="/search"
            render={() => (
              <SearchPage
                books={this.state.books}
                movedShelf={this.movedShelf}
              />
            )}
          />
          <Route
            excat
            path="/"
            render={() => (
              <MainPage books={this.state.books} movedShelf={this.movedShelf} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
