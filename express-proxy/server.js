const express = require('express');
const request = require('request')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}))


app.get("/", (req, res) => {
  // read query parameters
  const ip = req.query["ip"];

  // craft GEO IPIFY URL
  const url = `https://geo.ipify.org/api/v2/country?apiKey=at_dY5QOmYuX7TX78f19DBgVLnpz5thQ&ipAddress=${ip}`

  // make request to GEO IPIFY and forward response
  request(url).pipe(res);
});

app.listen(port, () => console.log(`http://localhost:${port}`));