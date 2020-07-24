// MAP

const map = L.map("map").setView([35.9027173,-79.0500057], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//TILE LAYERS

// Add historical layer
var GeoRef = L.tileLayer('./historicaltiles/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">Historical</a> contributors'
}).addTo(map);

// LEGENDS

// MARKERS



// GET latlng onClick
//
// map.on('click', function (e) {
//   console.log(e.latlng)
//   alert(e.latlng)
// })