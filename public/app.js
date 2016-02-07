var initialize = function() {


  var title = document.querySelector('#title');
  title.innerText = "Nick's Grand Thai Adventure";


  var start = document.querySelector('#start');

  start.onclick = function(event){

  var latlng = new google.maps.LatLng(55.9442174, -3.1306679);
  var myOptions = {
    zoom: 9,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
  var rendererOptions = {
    map: map
  };
  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var org = new google.maps.LatLng(55.9442174,-3.1306679);
  var dest = new google.maps.LatLng(55.9506709,-3.361478);
  var request = {
    origin: org,
    destination: dest,
    travelMode: google.maps.DirectionsTravelMode.TRANSIT
  };
  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if(status==google.maps.DirectionsStatus.OK){
      directionsDisplay.setDirections(response);
    }else
      alert('failed to get directions');
    }
  );
}

var step1 = document.querySelector('#step1');

step1.onclick = function(event){
  var marker1, marker2;
  var poly, geodesicPoly;

  var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 34, lng: -40.605}
      });

  marker1 = new google.maps.Marker({
    map: map,
    position: {lat: 55.9442174, lng: -3.1306679},
    animation: google.maps.Animation.DROP
  });

  marker2 = new google.maps.Marker({
    map: map,
    position: {lat: 25.2610663, lng: 51.6126914},
    animation: google.maps.Animation.DROP
  });

  var bounds = new google.maps.LatLngBounds(
      marker1.getPosition(), marker2.getPosition());
  map.fitBounds(bounds);

  geodesicPoly = new google.maps.Polyline({
    strokeColor: '#CC0099',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    geodesic: true,
    map: map
  });

  var path = [marker1.getPosition(), marker2.getPosition()];
    geodesicPoly.setPath(path);
}

var step2 = document.querySelector('#step2');

step2.onclick = function(event){
  var marker1, marker2;
  var poly, geodesicPoly;

  var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 34, lng: -40.605}
      });

  marker1 = new google.maps.Marker({
    map: map,
    position: {lat: 25.2610663, lng: 51.6126914},
    animation: google.maps.Animation.DROP
  });

  marker2 = new google.maps.Marker({
    map: map,
    position: {lat: 13.6899105, lng: 100.749753},
    animation: google.maps.Animation.DROP
  });

  var bounds = new google.maps.LatLngBounds(
      marker1.getPosition(), marker2.getPosition());
  map.fitBounds(bounds);

  geodesicPoly = new google.maps.Polyline({
    strokeColor: '#CC0099',
    strokeOpacity: 1.0,
    strokeWeight: 3,
    geodesic: true,
    map: map
  });

  var path = [marker1.getPosition(), marker2.getPosition()];
    geodesicPoly.setPath(path);
}


}



window.onload = initialize;
