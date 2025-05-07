import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallbac={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {data.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
