var locations =[
	{
		"lat": "21.371244",
		"lon": "-157.91748",
		"title": "RIMPAC Navy Exercise",
		"msg": "Demonstrating the power of modular microtasking for disaster response",
		"link": "camproberts"
	},
	{
		"lat": "26.43122806450644",
		"lon": "18.28125",
		"title": "UN OCHA's LibyaCrisisMap.net",
		"msg": "Providing realtime situational awareness for humanitarian groups",
		"link": "libyacrisismap"
	},
	{
		"lat": "4.56547",
		"lon": "-74.1357",
		"title": "UNOCHA Colombia Earthquake Simulation",
		"msg": "International exercise & first deployment of the Standby Task Force",
		"link": "colombiaquakesim"
	},		
	{
		"lat": "35.7753257",
		"lon": "-120.774063",
		"title": "US Navy Exercise at RELIEF/Camp Roberts",
		"msg": "Crowd-sourced microtasking for operational training",
		"link": "camproberts"
	},		
	{
		"lat": "40.74049401829621",
		"lon": "-73.98811340332031",
		"title": "Project (RED) World Aids Day Campaign",
		"msg": "Platform to track social media trends around the world",
		"link": "projectred"
	},		
	{
		"lat": "9.080400104155315",
		"lon": "38.759765625",
		"title": "ICRC Water Point Tracking in Ethiopia",
		"msg": "Enabling rapid field assessments through mobile phones and data fusion",
		"link": "icrcwells"
	},		
	{
		"lat": "15.580710739162123",
		"lon": "32.6513671875",
		"title": "SudanVoteMonitor.com",
		"msg": "Tracking issues at polling stations across the country",
		"link": "sudanvotemonitor"
	},		
	{
		"lat": "29.6880527498568",
		"lon": "69.63134765625",
		"title": "Pakreport.org",
		"msg": "Tracking nationwide flooding in '10",
		"link": "pakreport"
	},		
	{
		"lat": "33.7243396617476",
		"lon": "66.005859375",
		"title": "USAID Afghan Well Tracker",
		"msg": "Citizen reporting of malfunctioning water points via IVR",
		"link": "usaid"
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
	myMarker.bindInfoWindow('<u><b>' + entry.title + "</b></u><br />" + entry.msg);
}
