



var initialize = function() {

  var title = document.querySelector('#title');
  title.innerText = "Nick's Grand Thai Adventure";

  var start = document.querySelector('#start');

  start.onclick = function(event){
    var center = {lat: 55.9442174, lng: -3.1306679};
    var zoomNumber = 15;
    var map = new Map(center, zoomNumber);
    map.addMarker(center, "1");
    var next = document.createElement('button');
    next.innerText = 'Next';
    buttons.appendChild(next);
    this.style.visibility= 'hidden';
    map.loadDirections();
  }

  var next = document.querySelector('#button');

  
  next.onclick = function(event) {
      map.airpotDirectionsRequest();
  }
}


// var map;

// function initialize(){
//   var latlng = new google.maps.LatLng(55.9442174, -3.1306679);
//   var myOptions = {
//     zoom: 9,
//     center: latlng,
//     mapTypeId: google.maps.MapTypeId.TERRAIN
//   };
//   map = new google.maps.Map(document.getElementById("map"), myOptions);
//   var rendererOptions = {
//     map: map
//   };
//   directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
//   var org = new google.maps.LatLng(55.9442174,-3.1306679);
//   var dest = new google.maps.LatLng(55.9506709,-3.361478);
//   var request = {
//     origin: org,
//     destination: dest,
//     travelMode: google.maps.DirectionsTravelMode.TRANSIT
//   };
//   directionsService = new google.maps.DirectionsService();
//   directionsService.route(request, function(response, status) {
//     if(status==google.maps.DirectionsStatus.OK){
//       directionsDisplay.setDirections(response);
//     }else
//       alert('failed to get directions');
//     }
//   );
// }



window.onload = initialize;
