// Book.jsx
import React, { Suspense } from 'react';
const BookList = React.lazy(() => import('./BookList'));

const Book = () => {
  const bookPromise = fetch('booksData.json').then((res) => res.json());

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <BookList bookPromise={bookPromise} />
      </Suspense>
    </div>
  );
};

export default Book;
