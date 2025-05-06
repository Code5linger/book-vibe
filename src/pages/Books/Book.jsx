import React, { use } from 'react';

const Book = ({ fetchingBooks }) => {
  const books = use(fetchingBooks);

  console.log(books);
  return (
    <div>
      <h1>Book</h1>
    </div>
  );
};

export default Book;
