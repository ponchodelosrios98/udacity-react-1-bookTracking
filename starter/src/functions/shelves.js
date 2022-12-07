export const organizeBooks = (books) => {
  const shelfs = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };

  books.map((book) => (
    shelfs[book.shelf].push(book)
  ));

  return shelfs;
};

export const reorganizeShelfs = (selectedBook, shelfs, selectedShelf) => {
  const currentShelf = selectedBook.shelf;
  let newShelfs = shelfs;

  if (currentShelf !== undefined && currentShelf !== 'none') {
    newShelfs[currentShelf] = newShelfs[currentShelf].filter((book, i) => {
      return book.id !== selectedBook.id;
    });
  }

  if (selectedShelf !== 'none') {
    newShelfs[selectedShelf].push({ ...selectedBook, shelf: selectedShelf});    
  }

  return newShelfs;
};

