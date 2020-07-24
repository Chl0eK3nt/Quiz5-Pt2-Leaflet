// MAP

const map = L.map("map").setView([35.904597,-79.0460367], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// GeoREF TILE

var GeoRef = L.tileLayer('./historicaltiles/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">Historical</a> contributors'
}).addTo(map);

// LEGENDS

// MARKERS

    var morrison = L.icon({
        iconUrl: 'https://si.wsj.net/public/resources/images/PJ-AX628_build1_F_20101025183027.jpg',
        iconSize: [50, 50], // size of the icon
        popupAnchor: [0,-15]
        });
    var customPopup = "Morrison Dorm, My Home Next Semester<br/><img src='https://i.pinimg.com/originals/ed/7e/8d/ed7e8d53ba04fcc557ed0cf477d76a08.jpg' alt='go heels' width='250px'/>";
    var customOptions =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }
    L.marker([35.904597,-79.0460367], {icon: morrison}).bindPopup(customPopup,customOptions).addTo(map);


// GET latlng onClick
//
// map.on('click', function (e) {
//   console.log(e.latlng)
//   alert(e.latlng)
// })