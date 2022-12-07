import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import PageTitle from "./../../components/navigation/PageTitle";
import BookShelf from "./../../components/modules/Bookshelf";

const Home = ({
  books,
  updateBook,
}) => {
  return (
    <div className="app">
      <div className="list-books">
        <PageTitle title="My reads" />
        <div className="list-books-content">
          <div>
            <BookShelf
              bookshelfTitle="Currently Reading"
              books={books.currentlyReading.map((book) => ({
                key: book.id,
                id: book.id,
                title: book.title,
                backgroundImage: book.backgroundImage || `url("${book.imageLinks.thumbnail}")`,
                authors: book.authors,
                shelf: book.shelf,
              }))}
              updateBook={updateBook}
            />
            <BookShelf
              bookshelfTitle="Want to read"
              books={books.wantToRead.map((book) => ({
                title: book.title,
                key: book.id,
                id: book.id,
                backgroundImage: book.backgroundImage || `url("${book.imageLinks.thumbnail}")`,
                authors: book.authors,
                shelf: book.shelf,
              }))}
              updateBook={updateBook}
            />
            <BookShelf
              bookshelfTitle="Read"
              books={books.read.map((book) => ({
                title: book.title,
                key: book.id,
                id: book.id,
                backgroundImage: book.backgroundImage || `url("${book.imageLinks.thumbnail}")`,
                authors: book.authors,
                shelf: book.shelf,
              }))}
              updateBook={updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.object,
  updateBook: PropTypes.func,
};

export default Home;
