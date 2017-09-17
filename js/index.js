// Call functions
window.onload = function () {
	loadMap();
}


function loadMap() {
	var mapOptions = {
	   center:new google.maps.LatLng(39.5411164,-82.3972868), zoom:12,
	   mapTypeId:google.maps.MapTypeId.ROADMAP
	};
		
	var map = new google.maps.Map(document.getElementById("google-map"),mapOptions);
	 var marker = new google.maps.Marker({
	   position: new google.maps.LatLng(39.5411164,-82.3972868),
	   map: map,
	});
}