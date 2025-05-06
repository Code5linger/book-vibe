// import React, { Suspense, useEffect, useState } from 'react';

// const Book = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch('booksData.json')
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, []);

//   const fetchingBooks = fetch('booksData.json').then((res) => res.json());

//   return (
//     <div>
//       <h1 className="text-3xl text-center p-6">Books</h1>
//       <Suspense fallback={<span>Loading....</span>}>
//         <Book fetchingBooks={fetchingBooks} />
//       </Suspense>
//     </div>
//   );
// };

// export default Book;
