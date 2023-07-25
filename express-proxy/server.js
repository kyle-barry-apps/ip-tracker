const express = require('express');
const request = require('request')
const dotenv = require('dotenv').config()
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001;

app.use(cors({
  origin: '*'
}))

app.get("/", (req, res) => {

  // craft GEO IPIFY URL
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`

  // make request to GEO IPIFY and forward response
  request(url).pipe(res);
});

app.get("/ip", (req, res) => {
  // read query parameters
  const ip = req.query["ip"];

  // craft GEO IPIFY URL
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`

  // make request to GEO IPIFY and forward response
  request(url).pipe(res);
});



app.listen(port, () => console.log(`http://localhost:${port}`));