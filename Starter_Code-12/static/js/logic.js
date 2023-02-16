const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

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
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  console.log(data);
  function getValue(x) {
    return x > 90 ? "#800026" :
           x > 70 ? "#BD0026" :
           x > 50 ? "#E31A1C" :
           x > 30 ? "#FC4E2A" :
           x > 10 ? "#FD8D3C" :
           x > -10 ? "#FED976" :  };

// colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"]
// limits = [90, 70, 50, 30, 10, -10]
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        colors = ["#800026", "#BD0026", "#E31A1C", "#FC4E2A", "#FD8D3C", "#FED976"],
        limits = [90, 70, 50, 30, 10, -10];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
function style(feature) {
	return {
		"color": getValue(feature.geometry.coordinates[2]),
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
  });