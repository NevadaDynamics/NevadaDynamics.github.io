

jQuery.get( "http://api.openweathermap.org/data/2.5/weather?lat=39.5272&lon=-119.8219", function( response ) { 
    // response contains site information

    // Change main divs
    document.getElementById("conditions").innerHTML = ((response.weather[0]).description);
    document.getElementById("windspeed").innerHTML = response.wind.speed + " mph";
} );