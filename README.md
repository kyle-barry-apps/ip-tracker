# IP address tracker

[Live URL:](https://64c012644b52c808d8827df6--flourishing-parfait-5b0248.netlify.app/)

## Welcome! 👋

This application, built in React, uses Leaflet maps and the Geo Ipify API to allow users to search for any IP address, receive data about the IP, and render a map to the coordinates associated with the IP.

I created a proxy backend service to query the API so I could control for CORS issues and access the data from my front end without running into browser issues.

The major challenge was getting used to using Leaflet and React Leaflet, and figuring out how to dynamically change the marker on the map as the map container itself is immutable.
