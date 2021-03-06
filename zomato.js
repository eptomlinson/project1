var apiKey = 'f61035e04f9b3156d193146e6e338300';
var array = [];

cuisineList()
function randomMovieID(){
  var movieIds = ["tt1285016", "tt1285015", "tt1285014", "tt1285013", "tt1285012", "tt0066921", "tt0107290", "tt0084787", "tt0098627", "tt0172495", "tt0081505", "tt0413300", "tt0942385", "tt0078748", "tt0080455", "tt0120693", "tt0113198", "tt0110357", "tt0499549", "tt0936501", "tt0093058", "tt0120815", "tt0056869", "tt0077651", "tt1119646", "tt0099871", "tt0128853", "tt0104073", "tt0118715", "tt0077416", "tt0396269", "tt0098635", "tt0477348", "tt0093779", "tt0838283", "tt0092890", "tt0374900", "tt0332379", "tt0111257", "tt0099685", "tt4364194", "tt0120693", "tt0278488", "tt0113198", "tt0302886", "tt1119646", "tt1119646", "tt0265666", "tt5052448", "tt0060196", "tt0112461", "tt7286456", "tt0094074", "tt0084726", "tt0250687", "tt0102685", "tt0180734", "tt0093773", "tt0416449", "tt0104257", "tt0250494", "tt0158983", "tt0106611", "tt0107688", "tt0013442", "tt1086064", "tt0084503", "tt0080505", "tt0099810", "tt0110912", "tt0104181", "tt0043274", "tt0129167", "tt0443453", "tt0062622", "tt0082509", "tt1092007", "tt0113118", "tt1398426", "tt0368226", "tt0074486", "tt0073629", "tt0083907", "tt0092991", "tt0106308", "tt0457430", "tt0099053", "tt0067277", "tt0245712", "tt0246578", "tt1049413", "tt4263482", "tt7784604", "tt0094012", "tt0072431", "tt0083658", "tt0092675", "tt0071230", "tt0056142", "tt0340855", "tt0090605", "tt3890160", "tt0113497", "tt0080678", "tt0102926", "tt1136608", "tt0848228", "tt0387808", "tt0115641", "tt0119094", "tt0185183", "tt0074285", "tt0115963", "tt0097493", "tt0114508", "tt0071853", "tt0079470", "tt1175491", "tt0870111", "tt0106965", "tt0108052", "tt0068646", "tt0071562", "tt0437086", "tt1677720", "tt1431045", "tt0108358", "tt0190332", "tt0446059", "tt0267804", "tt0111438", "tt0113855", "tt0310793", "tt0427944", "tt1467304", "tt0055928", "tt0117998", "tt0120611", "tt0338526", "tt0198781", "tt0266543", "tt0109506", "tt0470752", "tt0419706", "tt1392190", "tt0993846", "tt1853728", "tt0361748", "tt0105236", "tt0086250", "tt0120669", "tt0046876", "tt0210945", "tt1125849", "tt0093177", "tt0120746", "tt0191397", "tt0097815", "tt0033467", "tt0075005", "tt0109830", "tt0096895", "tt0063522", "tt0063522", "tt7349950", "tt1396484", "tt1396484", "tt0373074", "tt0091064", "tt0070917", "tt0160862", "tt0365830", "tt0116778", "tt0116683", "tt0068833", "tt0105793", "tt0325710", "tt0099348", "tt0112642", "tt0087332", "tt0120689", "tt0215129", "tt1950186", "tt8579674", "tt6751668", "tt0082694", "tt0079501", "tt0093409", "tt0120828", "tt0054692", "tt0080761", "tt0087800", "tt0285823", "tt0266697", "tt1130884", "tt0264464", "tt0119217", "tt0107614", "tt0117218", "tt0086960", "tt0094898", "tt0118615", "tt0149261", "tt0073195", "tt0075860", "tt0118884", "tt0238380", "tt0253556", "tt0381849", "tt0110148", "tt0110322", "tt0345950", "tt0103786", "tt0162212", "tt0103064", "tt0088247", "tt0082971", "tt0073486", "tt0211915", "tt0114369", "tt0054215", "tt0056592", "tt0317248", "tt0034583", "tt0338013", "tt2582802", "tt7984734", "tt5697572", "tt3040964", "tt1485796", "tt0077631", "tt2584384", "tt0482571", "tt0278504", "tt5606664", "tt2090440", "tt1465522", "tt1259521", "tt1396484", "tt0107362", "tt0111503", "tt0100802", "tt0405296"];
  var random = Math.floor(Math.random()*movieIds.length +1);
  return movieIds[random];
}

//Get City ID for User Search
$('#foodBtn').on('click', function(e) {
  e.preventDefault();
  var userInput = $("#userInput").val();
  // console.log(userInput);
  var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=292&entity_type=city&cuisines="+userInput;
  var movieQuery = `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=f00951ae&i=${randomMovieID()}`;
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
       'user-key': apiKey
    }
  })
.then(function(response) {
  // console.log(response);
  $("#restaurant").empty();
  array = response.restaurants
  // console.log(array)
    for (var i = 1; i < 6; i++){
      // console.log(i);
    var randomIndex = Math.floor(Math.random()*array.length);
    var restaurantList = $("<li>")
    var restaurant = (response.restaurants[randomIndex].restaurant.name);
    var location = response.restaurants[randomIndex].restaurant.location.address;
    restaurantList.text(restaurant +" - Address: " +location);
    $("#restaurant").append(restaurantList);
    console.log(response.restaurants[randomIndex].restaurant.name);
    array.splice(randomIndex, 1)
    }
});
  $.ajax({
    url:movieQuery,
    method: 'GET',
    headers: {
      'user-key': apiKey
    }
  })
  .then(function(movieResponse){
    $("#poster-view").empty();
    console.log(movieResponse);
    console.log(movieResponse.Title);
    console.log(movieResponse.Poster);
    var posterImage = $("<img>");
        posterImage.attr("src", movieResponse.Poster);
         $("#poster-view").prepend(posterImage);

        
    $("#movie-rec").text(movieResponse.Title + " // Released: " + movieResponse.Year + " // Rated: " + movieResponse.Rated + " // Genre: " + movieResponse.Genre + " // Starring: " + movieResponse.Actors + " // Directed By: " + movieResponse.Director + " // " + movieResponse.Runtime + "utes");
  })
});

function cuisineList(){
  var cuisineListURL = "https://developers.zomato.com/api/v2.1/cuisines?city_id=292";

$.ajax({
  url: cuisineListURL,
  method: 'GET',
  headers:{
    'user-key' : apiKey
  }
}).then(function(response){
  
  // "userInput"
  for(var i = 0; i < response.cuisines.length; i++){
    var optionList = $("<option>")
    optionList.text(response.cuisines[i].cuisine.cuisine_name);
    optionList.attr("value", response.cuisines[i].cuisine.cuisine_id);
    $("#userInput").append(optionList);
    // resetdefault 
  }
 

})

}

