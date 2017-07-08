var channelM = "eonMap";

var pubnub = PUBNUB.init({
  publish_key   : 'pub-c-71f01ca6-632d-4152-b56b-95c50a5b0c79',
  subscribe_key : 'sub-c-afa77712-5510-11e5-85f6-0619f8945a4f'
});

/*
L.mapbox.accessToken = 'pk.eyJ1IjoibWpzaGlnZ2lucyIsImEiOiJjaWY1eGg4ZnIwYTJ0czVtM2g1Nmtkc3dsIn0.lI1jOGk2M3M1ea709V1E-w';
var map = L.mapbox.map('map', 'mapbox.streets').setView([39.5272, -119.8219], 15);

// Add a new line to the map with no points.
var polyline = L.polyline([]).addTo(map);

// Keep a tally of how many points we've added to the map.
var pointsAdded = 0;

// Start drawing the polyline.
add();

function add() {

    // `addLatLng` takes a new latLng coordinate and puts it at the end of the
    // line. You optionally pull points from your data or generate them. Here
    // we make a sine wave with some math.
    polyline.addLatLng(
        L.latLng(
            Math.cos(pointsAdded / 20) * 30,
            pointsAdded));

    // Pan the map along with where the line is being added.
    map.setView([0, pointsAdded], 3);

    // Continue to draw and pan the map by calling `add()`
    // until `pointsAdded` reaches 360.
    if (++pointsAdded < 360) window.setTimeout(add, 100);
}
*/

var map = eon.map({
  id: 'map',
  mb_token: 'pk.eyJ1IjoibWpzaGlnZ2lucyIsImEiOiJjaWY1eGg4ZnIwYTJ0czVtM2g1Nmtkc3dsIn0.lI1jOGk2M3M1ea709V1E-w',
  mb_id: 'mslee.ja5lv7vi',
  pubnub: pubnub,
  channel: channelM,
  connect: connect,

    message: function (data) {
    map.setView(data[0].latlng, 12);
    console.log(data);
  }

});

function connect() {
//37.399591, -122.108217
    var point = {
      latlng: [37.399591, -122.108217]
  };


  setInterval(function(){

      var new_point = JSON.parse(JSON.stringify(point));

      new_point.latlng = [
      new_point.latlng[0] + (Math.random() * 0.05),
      new_point.latlng[1] + (Math.random() * 0.05)
      ];

      pubnub.publish({
        channel: channelM,
    message: [new_point] // even a single point should be an array
});

  }, 5000);

};

