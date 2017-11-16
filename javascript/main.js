$(document).ready(function(){
var long ,
	lat ,
    date = new Date(),
//console.log(date.getDay());
   dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//console.log(dayNames[date.getDay()]);

/***get geolocation using freeCodeCamp function ***/

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
	long = position.coords.longitude ;
	lat = position.coords.latitude ;
$("#geo").html("latitude: " + lat + "<br>longitude: " + long);
console.log(long +" "+lat);
var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=0c1a3f6e5306a8ed99cf12795c01dc2f'; 
console.log(url);

$.getJSON(url, function(data){
var weather = data.weather[0].main,
	tempKelvin = data.main.temp,
	windSpeed = data.wind.speed,
	country = data.sys.country,
	city = data.name;
	d = new Date();
console.log("the country is : " +country+ " and the city is: " +city);
$(".weather").html(weather);
$(".temp").html(Math.round(tempKelvin - 273)+"°C");
$(".windSpeed").html(windSpeed);
$(".country").html(country);
$(".city").html(city);
$(".date").html(Date);

$(".convert").click(function(){

	$(".temp").html(Math.round(tempKelvin)+"°K");
})

$(".degree").click(function(){

	$(".temp").html(Math.round(tempKelvin - 273)+"°C");
})
});
});
}

});




























//var api = 'https://api.openweathermap.org/data/2.5/weather?lat=36.8890181&lon=10.1842849&appid=0c1a3f6e5306a8ed99cf12795c01dc2f'
// var api = https://api.openweathermap.org/data/2.5/weather?lat=36.8890181&lon=10.1842849&appid=0c1a3f6e5306a8ed99cf12795c01dc2f; // api url before modification
/* 
var weatherType = data.weather[0].description;
var kelvin = data.main.temp;
var	windSpeen = data.wind.speed;
var city = data.name; 
*/