import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/Books/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <div>Hello World</div>,
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('./booksData.json'),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('./booksData.json'),
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
