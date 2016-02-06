var Map = function(latLng, zoomNumber) {
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zoomNumber
  }),
  this.addMarker = function(latLng, title, icon) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon
    });
    return marker;
  },
  this.bindClick = function(){
      google.maps.event.addListener(this.googleMap, 'click', function(event){
        this.addInfoWindow(
        {lat: event.latLng.lat(), lng: event.latLng.lng()},
        "King Kong's Back!", 
        "http://www.coloring-book.info/coloring/img_src/King%20Kong/1-King%20Kong.gif");
      }.bind(this));
    },
  this.setCentre = function(latLng) {
    this.googleMap.setCenter(latLng);
  },
  this.addInfoWindow = function(latLng, title, icon) {
    var marker = this.addMarker(latLng, title, icon);
    marker.addListener('click', function() {
      var infoWindow = new google.maps.InfoWindow({
        content: this.title
      });
      infoWindow.open(this.map, marker);
    });
  },
  this.airpotDirectionsRequest = function() {
    var airportDirectionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    var org = new google.maps.LatLng(55.9442174,-3.1306679);
    var dest = new google.maps.LatLng(55.9506709,-3.361478);
    var request = {
      origin: org,
      destination: dest,
      travelMode: google.maps.DirectionsTravelMode.TRANSIT
    };
    directionsService = new google.maps.DirectionsService();
    directionsService.route(request);
  }

}
