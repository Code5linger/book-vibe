import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
// import { data } from 'react-router';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Banner />
      <Books />
    </div>
  );
};

export default Home;
