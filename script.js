var client_secret = "BMILMZY2MLSK2A4X0FRFHMJM0VH2WUSC3GVLSCHM4F2BKK2V"
var client_id = "EIBF1SGSTTXXQNSGC5H4CZBJ4QPOE41QKU4ARTMAWNS3G1O2"

$( document ).ready(function() {
    $( "#submit" ).click(function() {
        $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id + 
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            console.log(data)
            console.log(data["response"]["venues"]["0"]["name"])
            console.log(data["response"]["venues"]["0"]["location"])
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.        
            });

    });
});
