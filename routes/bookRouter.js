/* eslint-disable space-before-blocks */
const express = require('express');


function routes(Book) {
  const nitengenezeeRoute = express.Router();
  nitengenezeeRoute.route('/vitabu')
    .post((req, res) => {
      const book = new Book(req.body);
      book.save();
      return res.status(201).json(book);
    })
    .get((req, res) => {
      // const { query }=req;    ////query one item but sends empty if it doesnt match
      const query = {};
      if (req.query.genre) {
        query.genre = req.query.genre;
      }
      Book.find(query, (err, books) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      });
    });

  // ////single book

  nitengenezeeRoute.route('/vitabu/:bookId') // creates a route to vitabu
    .get((req, res) => {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          return res.send(err);
        }
        return res.json(book);
      });
    });
  return nitengenezeeRoute;
}

module.exports = routes;
