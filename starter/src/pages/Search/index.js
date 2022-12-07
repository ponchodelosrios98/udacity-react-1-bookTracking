import { Link } from "react-router-dom";
import BookShelf from "../../components/modules/Bookshelf";

const Search = ({
  searchOneBook,
  searchResults,
  legacySearch,
  updateBook,
}) => {
  const handleSearch = (textInput) => {
    searchOneBook(textInput);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={legacySearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            searchResults.length ? (
              <BookShelf
                bookshelfTitle="Search results..."
                books={searchResults.map((book) => {
                  let backgroundImage = book.backgroundImage;

                  if (book.imageLinks) {
                    backgroundImage = `url("${book.imageLinks.thumbnail}")`;
                  }
  
                  return ({
                    title: book.title,
                    id: book.id,
                    key: book.id,
                    backgroundImage,
                    authors: book.authors,
                    shelf: 'none',
                  });
                })}
                updateBook={updateBook}
              />
            ) : undefined
          }
          
        </ol>
      </div>
    </div>
  );
}

export default Search;
