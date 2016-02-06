var Landing = function(){
  this.landingZone = document.getElementById('map')
  this.title = document.createElement('h2');
  console.log('got here');
  this.title.innerText = "Nick's Grand Thai Adventure";
};

Landing.prototype = {
  render: function(parent) {
  parent.appendChild(this.title);
  }
};