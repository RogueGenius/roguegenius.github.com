var locations =[
	{
		"lat": "21.371244",
		"lon": "-157.91748",
	},
	{
		"lat": "26.43122806450644",
		"lon": "18.28125",
	},
	{
		"lat": "4.56547",
		"lon": "-74.1357",
	},		
	{
		"lat": "35.7753257",
		"lon": "-120.774063",
	},		
	{
		"lat": "40.74049401829621",
		"lon": "-73.98811340332031",
	},		
	{
		"lat": "9.080400104155315",
		"lon": "38.759765625",
	},		
	{
		"lat": "15.580710739162123",
		"lon": "32.6513671875",
	},		
	{
		"lat": "29.6880527498568",
		"lon": "69.63134765625",
	},		
	{
		"lat": "33.7243396617476",
		"lon": "66.005859375",
	},		
];

var cloudmade = new CM.Tiles.CloudMade.Web({key: '8ee2a50541944fb9bcedded5165f09d9',styleId:15434});
var map = new CM.Map('cm-map', cloudmade);
map.setCenter(new CM.LatLng(32.514, -30.137), 2);
map.disableDoubleClickZoom();
map.disableScrollWheelZoom();

for (var x in locations){
	var entry = locations[x];
	var myMarkerLatLng = new CM.LatLng(entry.lat,entry.lon);
	var myMarker = new CM.Marker(myMarkerLatLng, { }); 
	map.addOverlay(myMarker);
	//myMarker.bindInfoWindow('<u><b>' + entry.title + "</b></u><br />" + entry.msg);
}
