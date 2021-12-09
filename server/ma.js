/// use GeoJson
// read about react-google-map
//calc the distance between 2 points using the Haversine formula:

var rad = function (x) {
  return (x * Math.PI) / 180;
};

var getDistance = function (p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat() - p1.lat());
  var dLong = rad(p2.lng() - p1.lng());
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) *
      Math.cos(rad(p2.lat())) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};

//////////////////////// using google ///////////////////////////////////////////////
var latitude1 = 39.46;
var longitude1 = -0.36;
var latitude2 = 40.4;
var longitude2 = -3.68;

var distance = google.maps.geometry.spherical.computeDistanceBetween(
  new google.maps.LatLng(latitude1, longitude1),
  new google.maps.LatLng(latitude2, longitude2)
);

// or ............ p1 and p2 are google.maps.LatLng(x,y) objects
function calcDistance(p1, p2) {
  var d = (
    google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
  ).toFixed(2);
  console.log(d);
}
