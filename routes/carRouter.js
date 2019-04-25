const express = require('express');

function routes(Gari) {
  const nitengenezeeRoute = express.Router();
  nitengenezeeRoute.route('/magari')
    .post((req, res) => {
      const nganya = new Gari(req.body);
      nganya.save();
      return res.status(201).json(nganya);
    })
    .get((req, res) => {
      Gari.find((err, cars) => {
        if (err) {
          return res.send(err);
        }
        return res.json(cars);
      });
    });
  return nitengenezeeRoute;
}

module.exports = routes;
