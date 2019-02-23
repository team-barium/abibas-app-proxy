const axios = require('axios');

module.exports = {
  details: (req, res) => {
    let productId = req.query.id;
    axios
      .get('http://localhost:3002/abibas/product', { params: { id: productId } })
      .then(({ data }) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).end();
      });
  },
  suggestions: (req, res) => {

  },
  reviews: (req, res) => {

  },
  navbar: (req, res) => {
    
  }
};
