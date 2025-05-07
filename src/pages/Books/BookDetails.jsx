import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const id = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const selectedBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = selectedBook;
  console.log(selectedBook);

  return (
    <div>
      <img src={image} alt="" srcset="" />
      <h1>{bookName}</h1>
    </div>
  );
};

export default BookDetails;
