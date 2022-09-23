const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/rates', async (req, res) => {
  const response = await fetch('https://api.coincap.io/v2/assets');
  const {data} = await response.json();

  console.log(req.query.currency);

  for(let i = 0; i < data.length; i++) {
    if (data[i].id === req.query.currency) 
      res.send({'usd': data[i].priceUsd});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});