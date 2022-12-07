import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { organizeBooks, reorganizeShelfs } from "./functions/shelves";
import { fetchOneBook, getAllBooks, updateBookShelf } from "./BooksAPI";

import Search from "./pages/Search";
import Home from "./pages/Home";

const App = () => {
  const [books, setBooks] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  const [searchResults, setResults] = useState(undefined);
  const [searchInputField, setSearchInput] = useState(undefined);

  const fetchAllBooks = async () => {
    const res = await getAllBooks();

    setBooks(organizeBooks(res));
  };

  const searchOneBook = async (textInput) => {
    setTimeout(async () => {
      const res = await fetchOneBook(textInput, 20);
      setSearchInput(textInput);
  
      if (!res || res.error) {
        return setResults([]);
      }
  
      setResults(res);
    }, 500)
  };

  const updateBook = async (book, shelf) => {
    updateBookShelf(book, shelf);

    const newBooks = reorganizeShelfs(book, books, shelf);

    setBooks({
      ...newBooks
    });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              books={books}
              updateBook={updateBook}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              searchOneBook={searchOneBook}
              searchResults={searchResults || []}
              updateBook={updateBook}
              shelfs={books}
              legacySearch={searchInputField}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
