const axios = require('axios');
let id = 14;

module.exports = {
  initialize: (req, res) => {
    id = req.query.id;
    console.log(id);
    res.status(200).end();
  },
  details: (req, res) => {
    console.log('hello');
    axios
      .get('http://3.86.105.203:3002/abibas/product', {
        params: { id: id } 
      })
      .then(({ data }) => {
        res.status(200).send(JSON.stringify(data));
      })
      .catch((err) => res.status(404).send(err));
  },
  colorChange: (req, res) => {
    let productId = req.query.id;
    axios
      .get('http://3.86.105.203:3002/abibas/product', {
        params: { id: productId }
      })
      .then(({ data }) => res.status(200).send(data))
      .catch((err) => res.status(404).send(err));
  },
  suggestions: (req, res) => {
    axios
      .get('http://18.216.95.88:3004/suggestions', {
        params: { id }
      })
      .then(({ data }) => res.status(200).send(JSON.stringify(data)))
      .catch(err => res.status(404).send(JSON.stringify(err)));
  },
  reviews: (req, res) => {
    let endpoint = req.originalUrl;
    axios
      .get('http://18.191.191.154:3003' + endpoint, {
        params: { id }
      })
      .then(({ data }) => res.status(200).send(JSON.stringify(data)))
      .catch(err => res.status(400).send(err));
  },
  search: (req, res) => {
    let endpoint = req.originalUrl;
    axios
      .get('http://107.23.168.202:3001' + endpoint)
      .then(({ data }) => res.status(200).send(JSON.stringify(data)))
      .catch((err) => res.status(404).send(err));
  }
};
