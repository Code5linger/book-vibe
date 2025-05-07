import React, { useEffect, useState } from 'react';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
    </div>
  );
};

export default Books;
