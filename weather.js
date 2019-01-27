// function to parse the data from the weather api and display it to the page.
function process(){
			var city = document.getElementById("city").value;
      if(city == ''){
        alert('Entter the city.');
      }

      // fetching the data from api.
			fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + '&appid=79091b773b5375b1bded6ef8f619f367')
  			.then(function(response) {
    			return response.json();
  			})
  			.then(function(myJson) {
    			//console.log(JSON.stringify(myJson));
    			var xjson = JSON.parse(JSON.stringify(myJson));
    			document.getElementById("lon").innerHTML = "a) Longitude is " + xjson.coord.lon;
    			document.getElementById("lat").innerHTML = "b) Latitude is " + xjson.coord.lat;
    			document.getElementById("temp").innerHTML = "c) Temperature is" + xjson.main.temp;
    			document.getElementById("pre").innerHTML = "d) Atmospheric pressure is " + xjson.main.pressure + " hPa";
    			document.getElementById("humidity").innerHTML = "e) Humidity is " + xjson.main.humidity;
    			document.getElementById("temp_min").innerHTML = "f) Minimum temperature is " + xjson.main.temp_min;
    			document.getElementById("temp_max").innerHTML = "g) Maximum temperature is " + xjson.main.temp_max;
    			document.getElementById("sea_level").innerHTML = "h) Atmospheric pressure on the sea leve is " + xjson.main.sea_level + " hPa";
    			document.getElementById("grnd_level").innerHTML = "i) Atmospheric pressure on the ground level is " + xjson.main.grnd_level + " hPa";
    			document.getElementById("wind_speed").innerHTML = "j) Wind speed is " + xjson.wind.speed+ "  meter/sec";
    			document.getElementById("clouds_all").innerHTML = "k) Cloudiness is " + xjson.clouds.all;
  			});
}
