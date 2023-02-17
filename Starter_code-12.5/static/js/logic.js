const url = "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD";
/* // Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
// Fetch the JSON data and console log it
 */
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 3
  });

  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.\
d3.json("https://data.nasa.gov/api/views/gh4g-9sfh/rows.json?accessType=DOWNLOAD").then(function(data) {
  console.log(data);
  function getColor(depth) {
    switch (true) {
      case depth > 90:
        return "#ea2c2c";
      case depth > 70:
        return "#ea822c";
      case depth > 50:
        return "#ee9c00";
      case depth > 30:
        return "#eecc00";
      case depth > 10:
        return "#d4ee00";
      case depth > -10:
        return "#98ee00";
     }
  
  }
colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"]
limits = [90, 70, 50, 30, 10, -10]

function style(feature) {
    return {
        "color": getColor(feature.geometry.coordinates[2]),
        "stroke": false, 
        "radius": feature.properties.mag*5,
        "fillOpacity": 1
    };
}

  L.geoJson(data, {

    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, style(feature));
    },

     onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
      );
    }
  }).addTo(myMap);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [90, 70, 50, 30, 10, -10],
        colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"]

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};

  function circleSize(feature){
    return 5;
  }

legend.addTo(myMap);
});

 
/* 
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
 */
 
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
/* 
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 3
  }); */

  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
 /*  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap); */
// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.\
/* d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  console.log(data);
  function getColor(depth) {
    switch (true) {
  case depth > 90:
    return "#800026";
  case depth > 70:
    return "#BD0026";
  case depth > 50:
    return "#E31A1C";
  case depth > 30:
    return "#FC4E2A";
  case depth > 10:
    return "#FD8D3C";
  case depth > -10:
    return "#FED976";
    }
  }
colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"]
limits = [90, 70, 50, 30, 10, -10]
var legend = L.control({position: 'bottomright'});
 */
/* legend.onAdd = function (map) {

     var div = L.DomUtil.create('div', 'info legend'),
        colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"],
        labels = [];
// loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
         div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
 };
  legend.addTo(map);
 *//* 
function style(features) {
	return {
		"color": getValue(features.geometry.coordinates[2]),
		"stroke": false,
    "radius": features.properties.mag*5,
    "fillOpacity": 1
	};
};

  L.geoJson(data, {
    pointToLayer: function (features, latlng) {
      return L.circleMarker(latlng, style(features));
    },

     onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
   
      );
    }
  }).addTo(myMap);
}); */ 